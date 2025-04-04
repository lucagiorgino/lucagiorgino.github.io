---
slug: what-i-learnt-using-actix-web
title: What I learnt using Actix-web
authors: luca
tags: [rust, actix-web]
---

In this post, I’ll share my few key learnings from using Actix Web.

<!--truncate-->

## Project structure

This is how I structured the backend when working with Actix Web.

```shell
server/
├── src/
│   ├── dtos/
│   ├── controllers/
│   ├── middlewares/
│   ├── repository/
│   ├── utils/      
│   ├── errors.rs
│   ├── lib.rs
│   └── main.rs
├── .env
└── Cargo.toml
```


## Error management

For error handling, I found the `thiserror` crate particularly useful due to its powerful `derive` macro, which simplifies custom error definitions. Then, implementing the `ResponseError` trait enables mapping `ServerError` to an `HttpResponse`, which includes the appropriate status code and a JSON response containing the error message. Example is shown below.

```rust
use actix_web::{HttpResponse, ResponseError, http::header::ContentType};
use reqwest::StatusCode;
use serde_json::json;

#[derive(thiserror::Error, Debug)]
pub enum ServerError {

    // Other errors ...

    // Database Errors
    #[error("Row not found")]   
    RowNotFound,
    #[error("tokio_postgres error")]
    TokioPostgresError(#[from] tokio_postgres::error::Error),
    #[error("Middleware error: {0}")]
    MiddlewareError(String),
}   

impl ResponseError for ServerError {

    fn error_response(&self) -> HttpResponse {
        HttpResponse::build(self.status_code())
            .insert_header(ContentType::html())
            .json(json!({
                "error": self.to_string()
            }))
    }

    fn status_code(&self) -> StatusCode {
        match *self {
            // Other errors ...
            ServerError::RowNotFound => StatusCode::NOT_FOUND,
            ServerError::TokioPostgresError(_) => StatusCode::INTERNAL_SERVER_ERROR,
            ServerError::MiddlewareError(_) => StatusCode::INTERNAL_SERVER_ERROR,
        }
    }
}
```

## Middlewares

In one project, I worked on developing a middleware responsible for extracting a JWT from a request and performing custom verification. At the time, I found the documentation on creating and using [Actix middleware](https://actix.rs/docs/middleware/) somewhat unclear ([docs.rs](https://docs.rs/actix-web/latest/actix_web/middleware/)). My goal was to define a single request that would be preprocessed by the custom middleware. To achieve this, I simply needed to use the `wrap` macro.

```rust
use actix_web::{body::MessageBody, dev::{ServiceRequest, ServiceResponse}, Error, HttpMessage};
use actix_web_lab::middleware::Next;

pub async fn middleware_foo(
    req: ServiceRequest,
    next: Next<impl MessageBody>,
) -> Result<ServiceResponse<impl MessageBody>, Error> {
    // pre-processing

    req.extensions_mut().insert( SomeData{ /*...*/ });

    // invoke the wrapped middleware or service
    let res = next.call(req).await?;

    // post-processing
    Ok(res)
}
```

```rust
#[get("/example-request", wrap = "from_fn(middleware_foo)")]
async fn example_request(
    req: HttpRequest,
    opt_some_data: Option<ReqData<SomeData>>,
) -> Result<HttpResponse, ServerError> {
    
    let some_data = opt_some_data.ok_or(ServerError::MiddlewareError("Missing strucuture".to_string()))?.into_inner();
    
    // use some_data

    Ok( /*...*/ )
}
```