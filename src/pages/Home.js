import { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Base from "../components/Base";
import CategorySideMenu from "../components/CategorySideMenu";
import NewFeed from "../components/NewFeed";
import Corosel from "../components/Corosel";

const Home = () => {
  return (
    <Base>
     

      <Container className="mt-3">
        <Row>
        <Col className="me-0 ms-1 mt-2 pt-2 ps-2">
         <Corosel />
        </Col>
          <Col md={2} className="pt-5">
            <CategorySideMenu />
          </Col>
          <Col md={10}>
            <NewFeed />
          </Col>
        </Row>
      </Container>
    </Base>
  );
};

export default Home;
