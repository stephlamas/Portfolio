import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { Row, Col } from "react-bootstrap";
import './Showcase.css'

const Showcase = ({ theme, children }) => {
  return (
    <>
        <Row>
            <Col>
                <p className="theme-title mt-3">
                    <AiOutlineFundProjectionScreen /> {theme}
                </p>
            </Col>
        </Row>
        {children}
    </>
  );
};

export default Showcase;
