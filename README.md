# JavaScript and Node.js Assignment

This repository contains various JavaScript and Node.js programs that demonstrate callback functions, promises, and asynchronous programming. Below is a detailed description of each program and instructions on how to run them.

## Contents

1. Callback Hell
2. Coin Flip with Callback
3. Asynchronous Addition
4. Promise Flow Explanation
5. Fetch Data from Public API
6. Process Array with Delays

## Callback Hell

This program demonstrates a nested series of callbacks, often referred to as "callback hell." It simulates a student studying various topics in a sequential manner. The callbacks are nested to ensure each task completes before the next one starts.


## Coin Flip with Callback
This program simulates a coin flip using a callback function. The result of the coin flip ("heads" or "tails") is passed to the callback function.
## Asynchronous Addition
This program converts a synchronous addition function to an asynchronous one using a callback. It simulates a delay before returning the sum of two numbers.

## Promise Flow Explanation
his program demonstrates the flow of a promise chain with .then and .catch blocks. It shows how promises can be used to handle asynchronous operations and errors.

### Explanation
- The job function returns a promise that immediately rejects.
- The promise is assigned to a variable.
- The first .then block is skipped because the promise was rejected.
- The second and third .then blocks are also skipped.
- The .catch block executes, logging an error message.
- The final .then block executes because the .catch handled the previous rejection.

  ## Fetch Data from Public API
This Node.js program fetches data from a public API using the Promise concept. It demonstrates how to make HTTP requests and handle responses asynchronously.

## Process Array with Delays
This Node.js program processes an array of numbers, doubling each number with a simulated delay of 1 second using Promises. It demonstrates how to chain promises to create delays between operations.

### How to Run

1. Ensure you have Node.js installed.
2. Save the code to a file named `callbackHell.js`.
3. Run the code using Node.js:
   ```bash
   node callbackHell.js

