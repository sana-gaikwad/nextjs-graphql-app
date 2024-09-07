# Next.js Web App

This is a [Next.js](https://nextjs.org/) web application, using GraphQL for API interactions, bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

You can view the live demo of the application [here](https://nextjs-graphql-app-v1-aj2hb02se-sana-gaikwads-projects.vercel.app/)

## Development Getting Started

To begin developing locally, follow the instructions below to clone the repository, install dependencies, and start the local development server.

### Prerequisites

Make sure you have the following installed:

- Node.js (version 18 or later)
- Yarn (or npm, but yarn is recommended)

### Steps

1. Clone the repository

   ```bash
   git clone <repo-url>
   ```

2. Install dependencies
   Navigate to the cloned repository and run the below command

   ```bash
    yarn install
   ```

3. Start the development server

   ```bash
    yarn dev
   ```

4. Open the app

   Visit http://localhost:3000 in your browser to see the result.

### Lint

`yarn lint` checks for linter errors and `yarn lint:fix` will automatically fix them.

### Format checking

`yarn format` uses Prettier to format code. `yarn format:fix` will automatically format code.

### Type Checking

`yarn typecheck` runs the TypeScript compiler to check for type errors without emitting any output files. It ensures that your code adheres to TypeScript's type-checking rules.

### Code generation with graphql-codegen

`yarn generate` will generate typescript files using graphql-codegen.

### Husky pre-commit hook

`yarn prepare` will install husky and pre-commit hooks.

## Deploy on Vercel

The app is deployed using Vercel free hosting which provides seamless integration with Next.js.
The deployment documentation is available [here](https://nextjs.org/learn-pages-router/basics/deploying-nextjs-app/deploy).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
