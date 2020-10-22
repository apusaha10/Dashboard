import React from 'react'
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import Admin from "../layouts/Admin.js";
import RTL from "../layouts/RTL.js";

import "../assets/css/dashboard.css";

export default function App() {
	return (
		 <Switch>
      <Route path="/admin" component={Admin} />
      <Route path="/rtl" component={RTL} />
      <Redirect from="/" to="/admin/dashboard" />
    </Switch>
	)
}