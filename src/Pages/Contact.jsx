import React, { useState } from "react";
import "../Styles/Contact.css";
import { TextField, Button } from "@material-ui/core";
import { seeYouSoon } from "../Images/contact/contactExport";
import { send } from "emailjs-com";
import Credits from "../Components/Credits";

const creditContent = (
  <>
    <p> Photograph © Clare Park </p>
    <p> Website by Rowan Williams </p>
  </>
);

const Contact = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "Debbie",
    reply_to: "",
    message: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send("service_9htj9pu", "template_g7j75jq", toSend, "NMFjDxmyJEJpKt2bg");
    setToSend({
      from_name: "",
      reply_to: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    console.log(toSend);
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact-main">
      <div
        className="contact-background"
        style={{
          backgroundImage: "url(" + seeYouSoon + ")",
          backgroundPosition: "center 0px",
          backgroundSize: "1000px",
        }}
      />
      <div className="contact-content">
        <h1>Contact</h1>
        <form className="contact-form" action="" onSubmit={onSubmit}>
          <TextField
            id="filled-basic"
            style={{ margin: 8, backgroundColor: "whitesmoke" }}
            fullWidth
            name="from_name"
            label="Name"
            variant="outlined"
            value={toSend.from_name}
            onChange={handleChange}
          />
          <TextField
            id="filled-basic"
            style={{ margin: 8, backgroundColor: "whitesmoke" }}
            fullWidth
            name="reply_to"
            label="Email"
            variant="outlined"
            value={toSend.reply_to}
            onChange={handleChange}
          />
          <TextField
            id="filled-basic"
            style={{ margin: 8, backgroundColor: "whitesmoke" }}
            fullWidth
            multiline
            rows={6}
            name="message"
            label="Write your message to send"
            margin="noraml"
            variant="outlined"
            value={toSend.message}
            onChange={handleChange}
          />
          {toSend.message.length >= 3 && toSend.from_name.length > 2 ? (
            <Button
              id="form-button"
              type="submit"
              variant="contained"
              color="primary"
              size="large"
            >
              SEND
            </Button>
          ) : (
            <></>
          )}
        </form>
        <Credits content={creditContent} />
      </div>
    </div>
  );
};

export default Contact;
