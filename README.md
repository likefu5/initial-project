# React Project for Millifx

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Most of Create React App function still in there as I am not very familiar with React framework yet.

## Libraries

Following are the libraries that need to add

### Axios

This library has been used with React Hooks to get information from AlphaVantage

If you do not have this library, please refer to following link for setup.
https://www.npmjs.com/package/axios

### Moment

This library has been used for time formating.

If you do not have this library, please refer to following link for setup.
https://momentjs.com/docs/#/use-it/

### formattedPrice

I have write this function by myself and saved in App.helper.js

## Inspiration
Thanks for CodeSandbox (https://codesandbox.io/) The coding part doesn't take much time, the project is easy than what I thought before. However, setup the environment and deploy the project cost me more than 3 hours as I am using a windows computer that never setup anything. I probabably will use my Mac for future coding as it is relatively eazy to do these.

Other than that, just would like to mention I don't like the API for free AlphaVantage. They shouldn't put any space (" ") in API (example: "5. Exchange Rate": "305880.15716400") and that 5 times/mins caps give me lots of trouble while I test is in Windows (I didn't notice the message from console.log and thought my code is wrong somewhere). 
