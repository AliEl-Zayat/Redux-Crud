import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Loading from "../components/Loading";

const RootLayout = () => {
  const [loading, setLoading] = useState(false);
  return (
    <Container>
      <Header />
      {loading ? (
        <Loading />
      ) : (
        <Row>
          <Col xs={{ span: 8, offset: 2 }}>
            <Outlet />
          </Col>
        </Row>
      )}
    </Container>
  );
};
export default RootLayout;
