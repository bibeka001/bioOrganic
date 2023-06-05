import React from "react";
const Contact = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row whole ">
          <div className="col-6 contact_details"></div>
          <div className="col-6 form_details">
            <h1>We'd Love to hear from you,</h1>
            <h1>Get in touch</h1>
            <form type="submit" className="input_details">
              <input
                type="text"
                placeholder="Full Name"
                className="contact_form"
              />
              <input
                type="email"
                placeholder="Mail ID"
                className="contact_form"
              />
              <input
                type="text"
                placeholder="Message"
                className="contact_message"
              />
              <input type="checkbox" placeholder="I am not a robot" />
              <button type="submit" className="form_submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
