---
slug: how-i-structure-my-react-applications
title: How I structure my React applications
authors: luca
tags: [web-applications, react]
---

Since university, I always used [React](https://react.dev/) for all of my front-end projects. <!--truncate--> This is how I usually structure them:

<!--truncate-->

```shell
frontend/
├── public/ # Static directory. Any contents inside here will be copied into the root of the final build directory. As an example images and `wasm` libraries
├── src/
│   ├── api/ # API call to backend components
│   ├── components/ # Shared components implemented for application-wide use
│   ├── hooks/ # Shared hooks implemented for application-wide use
│   ├── pages/ # Application pages/routes
│   ├── types/ # Shared types utilized throughout the entire application
│   ├── utils/ # Shared utility functions
│   ├── index.css # Main application component
│   ├── main.tsx  # Main application component
│   └── vite-env.d.ts # vite file for TypeScript IntelliSense
├── .env # Env Variables
├── .eslintignore # eslint file
├── .eslintrc.cjs # eslint file
├── .gitignore
├── LICENSE
├── README.md
├── index.html 
├── package.json
├── package-lock.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts # vite config file
```