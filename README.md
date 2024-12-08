# Spotify-Inspired Web 

This project is a React-based web app mimicking the Spotify desktop application. complete with playback, add-ons, and user authentication. Please follow the steps below to set up and run the project.

# Requirements

Environment:

1. Node.js (Version 16 or higher)
2. npm (included with Node.js)

Installation:

npm install 

-> please run the command in the project directory to install all required Node.js modules if the current modules do not work

# Running the App

PORT=5173 npm start or npm run start or npm start

-> In case npm run start (likely wouldn't work), ensure that the app is forced to run on PORT 5173 (as configured with 5173 for Spotify Intergration)
-> If website does not open, please open your browser and visit: http://localhost:5173

# Login

Please click "login" to authenticate with your Spotify account. (but Spotify Premium is required for playback functionality for the Playback SDK)

# Notes for the Professor

1. The project only relies on Spotify's Web API in terms of functionality. Ensure the app is running on PORT 5173, as specified, to meet the Spotify's redirect requirements.

2. Please login with your vaild Spotify accounts to see functions.

# Trubleshooting

1. If the app doesn't start:

- Verify that Node.js and npm are installed
- Run npm install again to make sure all dependencies are installed
- Ensure no other app is using PORT 5173

2. If Spotify playback doesn't work:

- Verify that your Spotify account and app are active (desktop app)
- Confirm the PORT=5173 requirement is met

3. Missing Dependencies (ex: Axios):

- If the package.json file does not include axios, install it manually by 'npm install axios'
