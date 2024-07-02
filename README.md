# Candidate Management API

## Description

This is a Candidate Management API built with Node.js, Express, and TypeScript. The API provides functionality to add, update, and manage candidate information, storing data in a MySQL database and also providing an in-memory database option for testing purposes.

## Table of Contents

- [Description](#description)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Error Handling](#error-handling)
- [Validation](#validation)
- [Testing](#testing)
- [Contributing](#contributing)

## Folder Structure

```bash
candidate-management-api/
├── src/
│ ├── controllers/
│ │ └── candidates.ts
│ ├── middlewares/
│ │ └── errorHandler.ts
│ ├── utils/
│ │ └── asyncErrorHandler.ts
│ ├── errors/
│ │ ├── badRequestError.ts
│ │ ├── BaseError.ts
│ │ ├── DatabaseError.ts
│ │ └── NotFoundError.ts
│ ├── repositories/
│ │ ├── candidates.ts
│ │ └── SQL/
│ │ └── candidates.ts
│ ├── models/
│ │ └── candidate.ts
│ ├── routes/
│ │ └── candidates.ts
│ ├── services/
│ │ └── candidate.ts
│ ├── DBConnection/
│ │ └── SQLDB.ts
│ ├── index.ts
├── tests/
│ └── candidate.test.ts
├── .eslintrc.json
├── .prettierrc
├── jest.config.js
├── package.json
├── README.md
└── .gitignore
```

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Mohamed-Alaaeldin-Fawzy/candidate-management-api.git
   cd candidate-management-api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. start the api:
   ```bash
   npm start
   ```

## Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

```env
PORT=8000
DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_HOST=your_database_host
DB_PORT=3306
```

## Usage

#### To start the server in development mode, run:

```bash
npm start
```

## Endpoints

### Create or Update Candidate

- URL: /candidate
- Method: POST

```bash:
json
{
  "firstName": "Mohamed",
  "lastName": "Alaaeldin",
  "email": "Mohamed@example.com",
  "phoneNumber": "123-456-7890",
  "callTime": 1720602000000,
  "linkedInUrl": "https://www.linkedin.com/in/mo",
  "githubUrl": "https://github.com/mo",
  "comments": "Experienced software engineer."
}
```

## Design Patterns

The application follows several design patterns and architectural principles to ensure maintainability and scalability:

1. Repository Pattern: Abstracts the data access layer, allowing the business logic to interact with the data source through a defined interface. This makes it easier to switch out the data source (e.g., from SQL to NoSQL) without changing the business logic.

2. Service Layer Pattern: Defines a service layer that contains business logic. This layer sits between the controllers and the repositories, providing an additional abstraction that makes the code more modular and easier to maintain.

3. Dependency Injection (DI): Though not explicitly implemented using a DI framework, the constructor.based injection allows for decoupling and easier testing.

4. Centralized Error Handling: Uses middleware to handle errors in a consistent manner, ensuring that all errors are processed through a single point.

5. Validation Middleware: Uses Joi for validating incoming requests to ensure data integrity and consistency.

## Error Handling

The API uses centralized error handling to manage different types of errors. Custom error classes are used to handle specific error scenarios such as validation errors, database errors, and not found errors.

## Validation

Request validation is handled using Joi. All required fields are validated before processing the request to ensure data integrity.

## Testing

To run tests, use the following command:

```bash
npm test
```
