import React from "react"
import {Redirect, Route} from "react-router-dom"
import {useAuth} from "../../services/Auth";


export function PrivateRoute({component: Component, userLogged, ...rest}) {
    const {currentUser} = useAuth()
    return (
        <Route
            {...rest}
            render={props => {
                return currentUser ? <Component {...props} /> : <Redirect to="/login"/>;
            }}
        />
    )
}
