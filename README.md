# E-Commerce Product Management System

A TypeScript-based application that interacts with an external API to manage and display product data. This project demonstrates object-oriented programming, asynchronous operations, and modular code structure.

## Overview

This application fetches product data from the Dummy JSON Products API and processes it using custom classes and utility functions. It showcases how to handle real-world data, apply business logic like discounts and taxes, and manage errors effectively.

## Features

- Fetch products from an external API using async/await
- Product class with reusable methods (display details, price calculations)
- Discount and tax calculation utilities
- Custom error handling for API and runtime issues
- Modular and scalable TypeScript structure

## Tech Stack

- TypeScript
- Node.js
- JavaScript (ES6+)
- Dummy JSON Products API

## Project Structure

```bash
src/
models/           # Product class
services/         # API calls
utils/            # Calculators & error handling
main.ts           # Entry point
```

## Setup & Run

### 1. Install dependencies

```bash
npm install
```

2. Compile TypeScript

```bash
npx tsc
```

3. Run the application

```bash
node dist/main.js
```

Optional Scripts

You can add these to your package.json for easier execution:

```bash
"scripts": {
  "build": "tsc",
  "start": "node dist/main.js"
}
```

Then run:

```bash
npm run build
npm start
```

## Status

✅ Completed as part of SBA (TypeScript & Advanced JavaScript)

## Key Concepts Demonstrated

- Object-Oriented Programming (OOP)
- Async/Await & Promises
- API Integration
- Error Handling
- Modular Architecture
