import React from "react";
import { Navigate } from 'react-router-dom'

export default function RequireAuth({children}) {
    return (
        children.props.loggedIn === null ?
            <Navigate to={"/404"} /> :
            children
    )
}