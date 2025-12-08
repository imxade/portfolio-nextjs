---
title: Solid may have a better chance than Svelte
description: Some thoughts and resoning on why Solid.js might be the standard if react goes down, compared ro Svelte and the rest
date: '2025-08-31'
tags:
  - Web
  - Deployment
image: https://images.unsplash.com/photo-1639322537231-2f206e06af84
draft: true
---

currently react dominates the industry, the usage is unmated by rest of the libraries in the interactive/reactive domain.

Solid.js is generally easier to transition to from React due to its familiar JSX syntax unlike Svelte which feels more just incremental shift or upgrade

In past we've seen that its better to avoid doing too much extra when it comes ot frontend, one example is server side components from react.

design stability:
in this case solid dominates as it has stabilized better than the rest, even svelte had gone through some design and decision changes in prior release cycles unlike solid. And do I even need to talk about react?

solid uses no virtual dom or compiler

Fine-grained reactivity with direct DOM updates, no Virtual DOM. Uses compile step for templates.

not having having srever side frontend components as an option will promote better practices
