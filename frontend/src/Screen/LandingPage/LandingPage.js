import React from 'react'
import { Container, Row } from "react-bootstrap";
import Header from '../../components/Header/Header';

const LandingPage = () => {
  return (
    <div className="main">
      <Header title="Login" />
      <Container>
        <Row>LandingPage</Row>
      </Container>
    </div>
  );
}

export default LandingPage