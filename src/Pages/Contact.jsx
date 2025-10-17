import React, { useState } from "react";
import "../Styles/Contact.css";
import { TextField, Button } from "@material-ui/core";
import { seeYouSoon } from "../Images/contact/contactExport";
import { send } from "emailjs-com";
import Credits from "../Components/Credits";

// Note: Create a .env file in the root directory with:
// REACT_APP_EMAILJS_SERVICE_ID=your_service_id
// REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id  
// REACT_APP_EMAILJS_USER_ID=your_user_id

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        toSend,
        process.env.REACT_APP_EMAILJS_USER_ID
      );

      setSubmitStatus('success');
      setToSend({
        from_name: "",
        reply_to: "",
        message: "",
      });
    } catch (error) {
      console.error('Email send failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
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
              disabled={isSubmitting}
            >
              {isSubmitting ? 'SENDING...' : 'SEND'}
            </Button>
          ) : (
            <></>
          )}

          {submitStatus === 'success' && (
            <div style={{
              color: 'green',
              marginTop: '10px',
              textAlign: 'center',
              fontWeight: 'bold'
            }}>
              ✅ Message sent successfully!
            </div>
          )}

          {submitStatus === 'error' && (
            <div style={{
              color: 'red',
              marginTop: '10px',
              textAlign: 'center',
              fontWeight: 'bold'
            }}>
              ❌ Failed to send message. Please try again.
            </div>
          )}
        </form>
        <Credits content={creditContent} />
      </div>
    </div>
  );
};

export default Contact;
