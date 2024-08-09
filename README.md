# Talent Profiles

This project is an AWS Serverless application that serves talent profile pages. It is built using Node.js, Express, and AWS services like DynamoDB. The application is designed to be deployed using the Serverless Framework.

## Team Members

Project built by a team of passionate young engineers as part of the first [Cohort of TalPods-Jusoor Tech Talent Pipeline](https://talpods.io/talpods-jusoor-tech-talent-pipeline.html) project

- [mhmmdkhoulani](https://github.com/mhmmdkhoulani)
- [FaisalMinawi](https://github.com/FaisalMinawi)
- [JoudyAlAshkar](https://github.com/JoudyAlAshkar)
- [Abdalkader-Kouhda](https://github.com/Abdalkader-Kouhda)
- [lAhmadBakkarl](https://github.com/lAhmadBakkarl)
- [abdel-hady](https://github.com/abdel-hady)
- [AliHousein](https://github.com/AliHousein)

## Technologies used 

JavaScript, Node JS Dynamo DB, Serverless JS, Express JS, EJS, AWS Lambda, AWS S3, Code Commit for Git, CI/CD using AWS Code Build and Code Pipeline

## AWS Architecture
![talent-profile-atchitecture-diagram](https://github.com/user-attachments/assets/722e55e9-5a14-47d1-beac-eec4d999995d)

## Project Structure

- **index.js**: The entry point of the application. It initializes the Express app and exports the serverless handler.
- **config/**: Contains configuration files.
- **routes/**: Defines the API routes for the application.
- **profile.js**: Handles profile-related routes and logic.

## Prerequisites

- **Node.js**: Ensure you have Node.js installed on your machine.
- **npm**: npm is required to manage dependencies.
- **Serverless Framework**: Install the Serverless Framework to deploy the application to AWS.

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/talpods/talent-profiles 
   cd talent-profiles
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

## Environment Variables

Ensure you have a `.env` file in the root directory with the following environment variables:

```env
USERS_TABLE=tableName
IMAGES_SRC=https://techsphere.academy.talpods.io/public/imgs
DB_REGION=sample-region
```

These variables are also configured in the `serverless.yml` file.

## Scripts

- **Start the application locally**:
  ```bash
  npm start
  ```
  This will start the Express server locally.

- **Run tests**:
  ```bash
  npm test
  ```
  This will run the Jest tests configured in the project.


## API Endpoints

The application exposes the following API endpoints:

- **GET `/profile/{slug}`**: Retrieves a profile based on the provided slug.
- **GET `/`**: Returns the home page of the application.

## Running Locally

To run the application locally, use the following command:

```bash
npm start
```

This will start the server on the port specified in the environment variables (default is `PORT=3000`). The application will be accessible at `http://localhost:3000`.

## Deploying to AWS

To deploy the application to AWS using the Serverless Framework, follow these steps:

1. **Configure AWS credentials**:
   Ensure your AWS credentials are configured on your machine.

2. **Deploy the application**:
   ```bash
   serverless deploy
   ```
   This will deploy the application to AWS Lambda and set up the necessary API Gateway endpoints, DynamoDB tables, and other resources.

## Serverless Framework Configuration

The `serverless.yml` file is configured to deploy the application to AWS. Here are the key sections:

- **Provider**: Specifies AWS as the provider and Node.js 20.x as the runtime.
- **Custom**: Defines custom variables such as the DynamoDB table name and the source of images.
- **Functions**: Defines the Lambda functions and their associated API Gateway routes.
- **Stages**: Specifies deployment stages (default is `dev`).

## Testing the Endpoints

You can test the endpoints using Postman or curl:

- **Retrieve a profile**:
  ```bash
  curl https://your-api-endpoint/profile/{slug}
  ```

- **Access the home page**:
  ```bash
  curl https://your-api-endpoint/
  ```


## Example Screenshots
### Profile Summary
![Screen Shot 2024-08-07 at 5 47 53 PM](https://github.com/user-attachments/assets/fb487d98-1b0f-4153-978f-b8aec0329b49)

### Experience
![Screen Shot 2024-08-07 at 6 15 02 PM](https://github.com/user-attachments/assets/e3d2f10e-0dd3-4863-a712-b3bd487f7f96)

### Certificates
![Screen Shot 2024-08-07 at 5 50 19 PM](https://github.com/user-attachments/assets/d533902a-8c16-4a77-8d65-fa2af5203df8)

## License

This project is licensed under the ISC License.
