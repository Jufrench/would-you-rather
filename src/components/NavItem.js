import React from "react"
import { NavLink } from 'react-router-dom'

export default function NavItem(props) {
    return (
        <li className="nav-list-item">
            <NavLink to={`/${props.destination.toLowerCase()}`} className='nav-list-item-link'>
                {props.destination}
            </NavLink>
        </li>
    )
}