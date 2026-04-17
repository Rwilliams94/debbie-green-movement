import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import "./Navbar.css";

const darkTitlePages = ["/iturnedandlooked"];

const NavBar = ({ homeColour, colour }) => {
  const [menu, setMenu] = useState(false);
  const location = useLocation();
  const titleColour = darkTitlePages.includes(location.pathname) ? "#111" : undefined;

  function handleMenu() {
    setMenu(!menu);
  }

  function handleHide() {
    setMenu(false);
  }

  const links = [
    { title: "Home", link: "/home" },
    { title: "Co-creation", link: "/creativedirector" },
    { title: "Dance", link: "/dancer" },
    { title: "Film", link: "/film" },
    { title: "Photography", link: "/photographer" },
    { title: "Movement", link: "/actormovement" },
    { title: "Contact", link: "/contact" },
  ];

  return (
    <>
      <div className="navbar-main-pages">
        <h2 className="thin left-margin" style={titleColour ? { color: titleColour, fontWeight: 100 } : undefined}>Debbie Green</h2>
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
          style={{ color: titleColour || (homeColour === "light" ? "whitesmoke" : "black") }}
          exact
          to="/home"
        >
          <h2 className="thin">Debbie Green</h2>
        </NavLink>
        <button
          onClick={handleMenu}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleMenu(); }}
          aria-label={menu ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menu}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center' }}
        >
          <MenuIcon style={{ fontSize: 45 }} />
        </button>
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
