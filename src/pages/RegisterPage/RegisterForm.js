import React from 'react'

import Register from '../../components/Register'
import {useAuth} from "../../authServices/Auth";

export const RegisterForm = () => {
    return (
        <div>
            <Register auth={useAuth()}/>
        </div>
    )
}


