import React from 'react'; // default
import ReactDOM from 'react-dom/client'; // default
import './index.css' // importing CSS file
import App from './App'; // importing the main APP components which have child components (under components)
// App basically refers to the App components exported from App.js

// React renders the App components INSIDE the 'root' div in index.html (by ReactDOM, 'hey! please render the App component / and inject them inside the 'root'!')

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);

// The 'root' refers to <div id="root"></div> in index.html
// (document.getElementById('root')) this part, this is a standard JS DOM method that is looking for the element with the id = "root", which is inside index.html

// <App />, you are rendering the app components, defined inside App.js