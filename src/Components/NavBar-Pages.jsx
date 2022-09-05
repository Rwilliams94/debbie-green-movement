import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import "./Navbar.css";

const NavBar = ({ homeColour, colour }) => {
  const [menu, setMenu] = useState(false);

  function handleMenu() {
    setMenu(!menu);
  }

  function handleHide() {
    setMenu(false);
  }

  const links = [
    { title: "Film", link: "/home" },
    { title: "Co-creation", link: "/creativedirector" },
    { title: "Dance", link: "/dancer" },
    { title: "Photography", link: "/photographer" },
    { title: "Movement", link: "/actormovement" },
    { title: "Contact", link: "/contact" },
  ];

  return (
    <>
      <div className="navbar-main-pages">
        <h2 className="thin left-margin">Debbie Green</h2>
        <ul className="navbar-list-pages">
          {links.map((link) => (
            <li className="navbar-item" key={link.title}>
              <NavLink
                exact
                to={link.link}
                className="navbar-item-pages med-font"
                style={{ color: colour === "light" ? "whitesmoke" : "black" }}
              >
                <h2 className="thin">{link.title}</h2>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-mobile">
        <NavLink
          className="navbar-title-pages med-font"
          style={{ color: homeColour === "light" ? "whitesmoke" : "black" }}
          exact
          to="/home"
        >
          <h2 className="thin">Debbie Green</h2>
        </NavLink>
        <MenuIcon onClick={handleMenu} style={{ fontSize: 45 }} />
      </div>
      {menu ? (
        <div className={`navbar-menu`}>
          <ul className="navbar-menu-list">
            {links.map((link) => (
              <li className="navbar-item" key={link.title}>
                <NavLink
                  exact
                  to={link.link}
                  className="navbar-item-pages med-font"
                  style={{ color: colour === "light" ? "whitesmoke" : "black" }}
                >
                  <h2 className="thin" onClick={handleHide}>
                    {link.title}
                  </h2>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <> </>
      )}
    </>
  );
};

export default NavBar;
