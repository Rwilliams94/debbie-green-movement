import React from "react";
import "./PictureGrid.css";
import Grid from "@material-ui/core/Grid";
import { NavLink } from "react-router-dom";

const PictureGrid = ({ pictures, links, titles }) => {
  if (!pictures) return <></>;
  return (
    <>
      <Grid container spacing={3} justify="center">
        {links
          ? pictures.map((picture) => (
              <Grid item key={picture.title}>
                <NavLink
                  exact
                  to={picture.link}
                  className="grid-links"
                  style={{ cursor: "pointer" }}
                >
                  <div className="grid-box">
                    <img
                      className="grid-image"
                      src={picture.image}
                      alt={picture.title}
                    />
                    <div className="grid-title">
                      <h5>{picture.title}</h5>
                    </div>
                  </div>
                </NavLink>
              </Grid>
            ))
          : pictures.map((picture) => (
              <Grid item key={picture.title}>
                <div className="grid-box">
                  <img
                    className="grid-image"
                    src={picture.image}
                    alt={picture.title}
                  />
                  {titles ? (
                    <div className="grid-title">
                      <h5>{picture.title}</h5>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </Grid>
            ))}
      </Grid>
    </>
  );
};

export default PictureGrid;
