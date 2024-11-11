import React from "react";
import "./Page.css";
// import NavBar from "../Components/NavBar-Pages";
import PictureGrid from "./Picture-Grid";
import Credits from "./Credits";
import Footer from "./Footer";

const Page = ({
  backgroundImage,
  rightContent,
  leftContent,
  photoContent,
  footerContent,
  creditContent,
}) => {
  return (
    <div className="page-main">
      <div
        className="page-background"
        style={{
          backgroundImage: "url(" + backgroundImage.image + ")",
          backgroundPosition: "center " + backgroundImage.position,
          backgroundSize: "1000px",
        }}
      />
      <div className="page-content">
        <div className="page-written">
          <div className="page-left">{leftContent}</div>
          <div className="page-right">{rightContent}</div>
        </div>
        <div className="page-grid">
          {photoContent ? (
            <PictureGrid
              pictures={photoContent.images}
              links={photoContent.links}
              titles={photoContent.titles}
            />
          ) : (
            <></>
          )}
        </div>
        <div className="page-footer">
          <Footer content={footerContent} />
          <Credits content={creditContent} />
        </div>
      </div>
    </div>
  );
};

export default Page;
