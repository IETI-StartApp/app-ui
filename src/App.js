import React from "react";
import './App.css';
import {AuthProvider} from "./authServices/Auth";
import {
    LandingPage,
    LoginPage,
    ProjectDescription,
    ProjectsGridPage,
    RegisterForm,
    RegisterProjectPage,
    UserSelect,
    Dashboard,
    CompleteInfo
} from "./pages";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import {PrivateRoute} from "./components";

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
                        <Route exact path='/user-type' component={UserSelect}/>
                        <PrivateRoute exact path='/complete-info' component={CompleteInfo}/>
                        <PrivateRoute exact path='/projects' component={() => <ProjectsGridPage objects={[]}/>}/>
                        <PrivateRoute exact path='/dashboard' component={Dashboard}/>
                        
                    </Switch>
                </AuthProvider>
            </Router>
        </>
    );
}

export default App;
