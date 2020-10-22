import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter  } from "react-router-dom";

// core components
import App from './App/App';

ReactDOM.render(
  <BrowserRouter>
  	<App />
  </BrowserRouter>
  ,document.getElementById("root")
);
