import React from "react";
import "./NavLink.css"
import { NavLink } from "react-router-dom";

const NavLinkList = ({pages}) => {

    console.log(pages);

    return (
        <>
        <ul className="navLink-list">
            {pages.map((page) => (
                <NavLink exact to={page.link} className="navLink-links">
                <li>{page.title}</li>
                </NavLink>
            ))}
        </ul>
        </>
    );
};

export default NavLinkList