import React from "react";
import './App.css';
import {AuthProvider} from "./services/Auth";
import {LoginPage, ProjectDescription, RegisterForm, RegisterProjectPage, UserSelect} from "./pages";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom"
import {PrivateRoute} from "./components/PrivateRoute";

function App() {
    return (
        <>
            <Router>
                <AuthProvider>
                    <Redirect exact from="/" to="/login"/>
                    <Switch>
                        <Route exact path="/login" component={LoginPage}/>
                        <PrivateRoute exact path='/project-description' component={ProjectDescription}/>
                        <Route exact path='/signup' component={RegisterForm}/>
                        <PrivateRoute exact path='/register-project' component={RegisterProjectPage}/>
                        <Route exact path='/user-type' component={UserSelect}/>
                    </Switch>
                </AuthProvider>
            </Router>
        </>
    );
}

export default App;
