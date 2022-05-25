import React from "react";
import "../Styles/Contact.css";
import { TextField } from "@material-ui/core";
import { seeYouSoon } from '../Images/contact/contactExport'
import Credits from "../Components/Credits";

const creditContent = (
  <>
    <p> Photography © Clare Park </p>
    <p> Website by Rowan Williams </p>
  </>
)

const Contact = () => {
  return (
    <div className="contact-main">
      <div className="contact-background"
        style={{
          backgroundImage: "url(" + seeYouSoon + ")",
          backgroundPosition: "center 0px",
          backgroundSize: "1000px",
        }}
      />
      <div className="contact-content">
        <h1>Contact</h1>
        <form className="contact-form" action="">
          <TextField
            id="filled-basic"
            style={{ margin: 8, backgroundColor: "whitesmoke" }}
            fullWidth
            label="Name"
            variant="outlined"
          />
          <TextField
            id="filled-basic"
            style={{ margin: 8, backgroundColor: "whitesmoke" }}
            fullWidth
            label="Email"
            variant="outlined"
          />
          <TextField
            id="filled-basic"
            style={{ margin: 8, backgroundColor: "whitesmoke" }}
            fullWidth
            multiline
            rows={6}
            label="Message"
            variant="outlined"
          />
        </form>
      <Credits content={creditContent}/>
      </div>
    </div>
  );
};

export default Contact;
