import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Title from "./Title";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_j316cxg",
      "template_1z2tk8g",
      form.current,
      "1YRalRfSJXmZ4wcif"
    );
  };

  return (
    <div className="flex flex-col  justify-center items-center min-h-screen">
      <Title className={"my-6"}>İletişim</Title>
      <div id="contact" className="border-2 p-6 ">
        <form
          className="flex flex-col gap-3 w-[30vw] "
          ref={form}
          onSubmit={sendEmail}
        >
          <label>Name</label>
          <input className="border-2 p-2" type="text" name="to_name" />
          <label>Email</label>
          <input className="border-2 p-2" type="email" name="from_name" />
          <label>Message</label>
          <textarea className="border-2 p-2" name="message" />
          <input
            className="border-2 cursor-pointer font-bold p-2"
            type="submit"
            value="Send"
          />
        </form>
      </div>
      <div className="flex gap-6 justify-center my-6 ">
        <div className="flex  items-center gap-3">
          <div>
            <div className="flex items-center justify-center gap-3">
              <i className="fa-solid fa-location-crosshairs"></i>
              <p className=" tracking-widest uppercase">konum</p>
            </div>
            <p>Istanbul, Turkiye</p>
          </div>
        </div>
        <div className="flex  items-center gap-3 ">
          <div>
            <div className="flex items-center justify-center gap-3">
              <i className="fa-solid fa-at"></i>
              <p className=" tracking-widest uppercase">mail </p>
            </div>
            <a href="mailto:mertdanis@outlook.com">mertdanis@outlook.com</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
