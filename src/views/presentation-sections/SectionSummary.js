import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
// core components

function SectionSummary() {
  return (
    <>
      <div className="section section-dark section-summary">
        <Container>
          <Row>
            <Col md="4">
              <div className="info">
                <div className="icon icon-danger">
                  <i className="nc-icon nc-layout-11" />
                </div>
                <div className="description">
                  <h4 className="info-title">Ready to Install Kits</h4>
                  <p>
                    Our DIY solar power system kits come ready to install by yourself or a hired professional. 
                  </p>
                </div>
              </div>
            </Col>
            <Col md="4">
              <div className="info">
                <div className="icon icon-danger">
                  <i className="nc-icon nc-tile-56" />
                </div>
                <div className="description">
                  <h4 className="info-title">Energy Storage Systems</h4>
                  <p>
Don't let storms and unstable power grid leave you in the dark! Take control of your power with a home energy storage system
                  </p>
                </div>
              </div>
            </Col>
            <Col md="4">
              <div className="info">
                <div className="icon icon-danger">
                  <i className="nc-icon nc-paper" />
                </div>
                <div className="description">
                  <h4 className="info-title">Solar Gear </h4>
                  <p>
                    Shop our huge selection fo solar panels, solar batteries, inverters, charge controllers and more. 
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionSummary;
