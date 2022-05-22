import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const Contact = ({emailAddress}) => {
useEffect(() => {
  Aos.init({ duration: 1000 });
}, []);
  return (
    <section id="contact">
      <h2>Contact me</h2>

      <div className="container contact__container" data-aos="zoom-out">
        <article className="contact__option">
          <MdOutlineEmail className="contact__option-icon" />
          <h4>{emailAddress}</h4>
          <a href={"mailto:" + emailAddress}>Send a message</a>
        </article>
      </div>
    </section>
  );
};

export default Contact;
