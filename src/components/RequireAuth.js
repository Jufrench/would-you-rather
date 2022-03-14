import React from "react";
import { Navigate } from 'react-router-dom'

export default function RequireAuth({ children } ) {
    if (children.props.loggedIn === null) {
        return <Navigate to={"/"} />

    } else {
        return children
    } 
}