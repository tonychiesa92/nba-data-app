import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function ProcessSection() {
  return (
    <section id="membership-benefits" className="py-5">
      <Container>
        <div className="text-center">
          <h2 className="mb-4">Tools Used To Make This Project</h2>
          <h5 className="mb-4">
            Data Analysis and Visualization as you know it is out the door. Data as you want it just arrived.
          </h5>
        </div>
        <Row>
          <Col lg={3}>
            <img
              className="img-fluid"
              src="./assets/images/MERN.png"
              alt="Email Subscribe"
              width="200"
              height="200"
              loading="lazy"
            />
            <h5>MERN Stack. This is a fullstack app utilizing Mongo Express Node and React.</h5>
          </Col>
          <Col lg={3}>
            <img
              className="img-fluid"
              src="./assets/images/540px-Npm-logo.svg.png"
              alt="Email Subscribe"
              width="200"
              height="200"
              loading="lazy"
            />
            <h5>statsmodels-js. A JavaScript implementation of statistics methods based on jstat and mathjs.</h5>
          </Col>
          <Col lg={3}>
            <img
              className="img-fluid"
              src="./assets/images/react-bootstrap-logo.svg"
              alt="Calendar"
              width="100"
              height="100"
              loading="lazy"
            />
            <h5>react-bootstrap. Used to create the frontend of the application.</h5>
          </Col>
          <Col lg={3}>
            <img
              className="img-fluid"
              src="./assets/images/chartjs-logo.svg"
              alt="100 Percent"
              width="100"
              height="100"
              loading="lazy"
            />
            <h5>chartjs/ react-chartjs-2. Used to preform the data visualization</h5>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ProcessSection;
