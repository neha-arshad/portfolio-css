import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";


const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="z-10">
        <h5 className="contact-heading">Let's Connect</h5>

        <p className="contact-description">
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>

        <div className="social">
          <Link href="https://github.com" target="_blank">
            <FaGithub className="social-icon" />
          </Link>
          <Link href="https://linkedin.com" target="_blank">
            <FaLinkedin className="social-icon" />
          </Link>
          <Link href="https://twitter.com" target="_blank">
            <FaTwitter className="social-icon" />
          </Link>
        </div>
      </div>
      <div className="contact-form-container">
        <form
          action="https://formspree.io/f/xyzgrqlg"
          method="POST"
          className="contact-form"
        >
          <input
            type="text"
            name="username"
            placeholder="Username"
            autoComplete="off"
            required
            className="contact-input"
          />

          <input
            type="email"
            name="Email"
            placeholder="Email"
            autoComplete="off"
            required
            className="contact-input"
          />

          <textarea
            name="message"
            placeholder="Your message"
            autoComplete="off"
            required
            className="contact-textarea"
          ></textarea>

          <input type="submit" value="Send" className="contact-submit" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
