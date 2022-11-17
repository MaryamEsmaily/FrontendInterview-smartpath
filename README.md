# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

The project is done using react js library.
Library used:
mui
Axios
Tanstack Query
@nivo/bar

The project is a single page, the design is implemented with mui.

It includes 2 graphs implemented with Nivo and their data is received from two APIs.

First, the Axios configuration was done. Using it, an API request is sent to receive data.

After receiving the data, they are displayed on the graph.

In the chart on the right, by selecting each of the radio buttons, the volume corresponding to that time will be displayed on the chart.

Using the check box in the bottom box, we will be able to change the display of the upper left chart based on different indexes.

A bar chart component is built to avoid code duplication.

The hook is made to use breakpoints to make responsiveness easier.
