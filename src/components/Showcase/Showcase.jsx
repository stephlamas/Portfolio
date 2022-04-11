import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { Row, Col } from "react-bootstrap";

const Showcase = ({ theme, children }) => {
  return (
    <Row>
      <p className="">
        <AiOutlineFundProjectionScreen /> { theme }
      </p>
      { children }
    </Row>
  );
};

export default Showcase;
