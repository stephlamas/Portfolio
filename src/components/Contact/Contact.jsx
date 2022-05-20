import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";


const Contact = ({emailAddress}) => {

  return (
    <section id="contact">
      <h2>Contact me</h2>

      <div className="container contact__container">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>{emailAddress}</h5>
            <a href={"mailto:" + emailAddress}>Send a message</a>
          </article>
        </div>
    </section>
  );
};

export default Contact;
