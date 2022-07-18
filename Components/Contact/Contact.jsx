import React, { useState } from "react";

function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div id="contact" className="contact">
      <h1 className="title roboto">Contact Us</h1>
      <p className="roboto">
        Fill up the form below & our team will get back soon.
      </p>
      <div>
        <div className="input-row">
          <input onChange={(v) => setName(v.target.value)} type="text" placeholder="Name" />
          <input onChange={(v) => setEmail(v.target.value)} type="email" placeholder="Email" />
        </div>
        <textarea onChange={(v) => setMessage(v.target.value)} placeholder="Your Message"></textarea>
        <p className="note roboto">
          By submitting this form you agree to our terms and conditions and our
          Privacy policy.
        </p>
        <button disabled={!email || !name || !message} onClick={() => {

          fetch("https://vitimist-curate-api-staging.azurewebsites.net/Comms", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: email,
              name: name,
              message: message,
            }),
          }).then((response) => {
            if (response.ok) {
              alert("Message sent successfully.");
            }
            else {
              console.log(e);
              alert("An error occurred, please try again.");
            }
          }).catch((e) => {
            console.log(e);
            alert("An error occurred, please try again.");
          });
        
         }} className="submit-form">Submit</button>
      </div>
    </div>
  );
}

export default Contact;
