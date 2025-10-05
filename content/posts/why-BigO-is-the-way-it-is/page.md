---
title: Big O, complexity vs contant
description: Some thoughts on why avoiding constant from complexity is fair
date: '2024-09-19'
tags:
  - CS
image: https://images.unsplash.com/photo-1639322537231-2f206e06af84
draft: true
---



## What is Big O?

- way to compare complexity of algorithm

### What is Complexity?

- a metric to compare algorithm, without considering anything other than just the theoretical algorithm itself

- yes, we don't even count some part of reality

- this metric is quite unrelated to real world implementation or scenario

- quick sort is generally faster than many algos with better theoretical complexity, remember performace != complexity even if they share relations on certion grouund

### Why constants are ignored?

A line we've heard alot is

- *Constants become negligible for very large n*

Really? till **n** is finite no matter how large it is, isn't 3n^9 still n^9 + n^9 +n^9? 


- *higher level grouping of algorithms with the same asymptotic behavior*

yeah that's valid, But is that it? 

Aren't constant still better for more accurate comparion?
The answer depends on how well do we know the constants



## Are we sure of the constant?

so the constant is directly related to no. of operations right?

So, is it the no of statements ?

Nah, their operation cost will depend on the way they are implemented at a lower level.
then how low is low enough ?

Impractical, but how about we consider changes in state of transistors?

now we can just multiply amount of transistor changes with related statements right?

But wait will it not vary with architecture? environment? and even temprature? (not counting for CPU throttle)

oh no even are we back to square one 

One can go even deeper if they want or may try to find a middle ground, 
maybe in future one may discover better metric for comparison

but till then avoiding constant is better as they don't give much clear idea about algorithm for the added complexity

Again a **freindly reminder,** performance != complexity

At, the end of the day we are talking complexity
