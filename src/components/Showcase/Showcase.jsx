import "./Showcase.css";
import { motion, AnimateSharedLayout } from "framer-motion";


const Showcase = ({ children }) => {

  return (
    <section id="showcase">
      <h2>My recent work</h2>
      <div className="container showcase__container">
        {children}       
      </div>
    </section>
  );
};

export default Showcase;
