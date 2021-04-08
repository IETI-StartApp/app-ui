import React from "react";
import './App.css';
import {AuthProvider} from "./authServices/Auth";
import {LandingPage, LoginPage, ProjectDescription, RegisterForm, RegisterProjectPage, UserSelect} from "./pages";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import {PrivateRoute} from "./components";
import {PaymentResponse} from './pages/Payment/index';

function App() {
    return (
        <>
            <Router>
                <AuthProvider>
                    <Switch>
                        <Route exact path="/" render={()=><LandingPage/>}/>
                        <Route exact path="/signin" render={()=><LoginPage/>}/>
                        <Route exact path='/signup' render={()=><RegisterForm/>}/>
                        <PrivateRoute exact path='/project-description' component={ProjectDescription}/>
                        <PrivateRoute exact path='/register-project' component={RegisterProjectPage}/>
                        <Route exact path='/epayco/response' component={PaymentResponse}/>
                        <Route exact path='/user-type' component={UserSelect}/>
                    </Switch>
                </AuthProvider>
            </Router>
        </>
    );
}

export default App;
