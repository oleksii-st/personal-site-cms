# Personal Site CMS

Personal Site CMS is a Payload CMS part of my personal site.

Other part of the project can be found [here](https://github.com/oleksii-st/personal-site)

## This repo is archived and will never be updated.

The project was created with Payload 2.0 and currently deprecated.
Payload 3.0 version which combine CMS and website parts can be found [here](https://github.com/oleksii-st/personal-site-monorepo). (Probably private repo).

## Description

This project uses Payload CMS to manage content for a personal website. It includes various plugins and features for enhanced functionality.

## Prerequisites

- Node.js
- Yarn (version 4.4.0 or later)
- MongoDB

## Installation

1. Clone the repository:
   `git clone <repository-url>`
2. Install dependencies:
   `yarn install`
3. Set up your environment variables by creating a `.env` file in the root directory. Include necessary variables such as database connection strings and any API keys.

## Scripts

- `yarn dev`: Start the development server
- `yarn build`: Build the project for production
- `yarn serve`: Serve the production build
- `yarn generate:types`: Generate TypeScript types
- `yarn generate:graphQLSchema`: Generate GraphQL schema
- `yarn lint`: Run ESLint
- `yarn lint:fix`: Run ESLint and fix issues
- `yarn format`: Format code using Prettier

## Development

To start the development server:
`yarn dev`
This will start the server using nodemon for auto-reloading.

## Building for Production

To build the project for production:
`yarn build`
This command will:

1. Copy necessary files
2. Build Payload
3. Build the server

## Serving Production Build

To serve the production build:
`yarn serve`

## Linting and Formatting

- Run `yarn lint` to check for linting issues
- Run `yarn lint:fix` to automatically fix linting issues
- Run `yarn format` to format code using Prettier

## Git Hooks

This project uses Husky for Git hooks. The pre-commit hook runs lint-staged to ensure all staged files are formatted before committing.

## Dependencies

Key dependencies include:

- Payload CMS
- Express
- MongoDB
- Various Payload plugins (Cloud, Nested Docs, Redirects, SEO)
- Webpack for bundling
- TypeScript

For a full list of dependencies, please refer to the `package.json` file.
