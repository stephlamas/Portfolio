import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { Row, Col } from "react-bootstrap";
import './Showcase.css'

const Showcase = ({ theme, children }) => {
  return (
    <>
        <p className="theme-title mt-3">
         <AiOutlineFundProjectionScreen /> {theme} </p>
        {children}
    </>
  );
};

export default Showcase;
