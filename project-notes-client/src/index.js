import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

/* TO-DO  */

/* 
  1. Implement Workspaces
    a. Ensure note is added to correct workspace
    b. Ensure workspace loads correct notes
    c. Ensure all workspaces are shown and can be accessed in menu
  2. Implement Backend
    a. Store data in remote database (MongoDB)
*/