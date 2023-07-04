# Worktables Backend Application

This is the backend part of the Worktables project. It is built using Node.js, Express.js and TypeScript.

## Getting Started
### Prerequisites
- You have installed the latest version of Node.js
- You have installed Yarn

### Installing
To install the frontend application, follow these steps:

- Change into the worktables-frontend directory:
```bash
cd worktables-frontend
```
- Install the dependencies:
```bash
yarn install
```
### Environment Variables
To run this project, you will need to add the following environment variables to your .env file:

- PORT=4000
- WEATHERAPI_KEY=your_weather_api_key

## Running the Application
You can run the frontend application in development mode using the following command:

```bash
yarn start
```

Open http://localhost:4000 to view it in the browser. The page will reload if you make edits. You will also see any lint errors in the console.

### Available Scripts
In the project directory, you can run:

- yarn start: Runs the app in the development mode
- yarn test: Launches the test runner in the interactive watch mode
- yarn build: Builds the app for production to the build folder
- yarn eject: Removes the single build dependency from your project

### Built With
- Node.js
- Express.js
- TypeScript

## License
This project uses the following license: MIT.