# Worktables
Worktables is a project that consists of two separate applications, a React front-end and a Node.js back-end, that work together to fetch and display a country's weather data.

## Project Setup
Before starting, ensure you have installed Node.js and Yarn on your machine.

To set up and run the project, follow these steps:

Clone this repository:
```bash
git clone https://github.com/pedrosgmagalhaes/worktables_interview
```

Navigate to the project directory:
```
cd /Users/pedromagalhaesgmail.com/Projects/worktables
```
Run the setup script:

```bash
./setup.sh
```
This script will navigate to each necessary directory, install dependencies for each application, and return to the root directory.

If you encounter a permission denied error, you may need to change the permissions of the setup file by running
```bash
chmod +x setup.sh.
```
Run both applications simultaneously:
```bash
yarn start
```

## Application Details

### Front-end
Our front end is a React application that:

- Uses either the React JS or the Next JS framework.
- Uses Typescript.
- Implements all UI elements listed previously.
- Fetches a country's weather data from our back-end app.
- Implements basic error handling.
- Clean and modular code.
- Used UI elements from 'monday-ui-react-core'.

### Back-end
Our back end is a Node.js application that:

- Uses any Node JS Back-end framework (e.g., Express JS).
- Uses REST API architecture.
- Uses Typescript.
- Fetches a country's weather data from the WeatherAPI.
- Implements basic error handling.