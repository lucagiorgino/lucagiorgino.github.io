---
slug: how-i-structure-my-react-applications
title: How I structure my React applications
authors: luca
tags: [web-applications, react]
---

Since university, I always used [React](https://react.dev/) for all of my front-end projects. I will describe in this post how I usually structure these projects. 

<!--truncate-->

```
frontend/
├── public/ #images and wasm libraries
├── src/
│   ├── api/
│   ├── components/
│   ├── hooks/
│   ├── pages/
│   ├── types/
│   ├── utils/
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── .env
├── .eslintignore
├── .eslintrc.cjs
├── .gitignore
├── LICENSE
├── README.md
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── tsconfig.node.json
├── vercel.json
└── vite.config.ts
```