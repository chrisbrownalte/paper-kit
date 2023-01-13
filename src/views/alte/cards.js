import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components

function SectionPricing() {
  const [activePill, setActivePill] = React.useState("1");
  // pills for the last pricing
  const [pillActive, setPillActive] = React.useState("personal");
  return (
    <>
      <div className="section section-pricing cd-section" id="pricing">

        {/* ********* PRICING 2 ********* */}
        <div className="pricing-2">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="6">
                <h2 className="title"><a herf="https://www.altestore.com/shop">Shop Renewable Energy</a></h2>
                
                <br />
               
                {/* First Row */}
                <TabContent activeTab={"pill-" + activePill}>
                  <TabPane tabId={"pill-" + activePill} />
                  <TabPane tabId={"pill-" + activePill} />
                </TabContent>
              </Col>
            </Row>
            <div className="space-top" />
            <Row>
              <Col md="4">
                <Card
                  className="card-pricing"
                  data-background="image"
                  style={{
                    backgroundImage:
                      "url(" +
                      require("assets/img/Classics/cabin.webp") +
                      ")",
                  }}
                >
                  <CardBody>
                  <CardTitle tag="h1">
                      Off Grid Power Systems
                                      </CardTitle>
                                      <br></br>
                     <Button
                      className="btn-round"
                      color="warning"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Shop Now
                    </Button>
                  </CardBody>
                </Card>
               </Col>

                          <Col md="4">
                              <Card
                                  className="card-pricing"
                                  data-background="image"
                                  style={{
                                      backgroundImage:
                                          "url(" +
                                          require("assets/img/Classics/shed.webp") +
                                          ")",
                                  }}
                              >
                                  <CardBody>
                                      <CardTitle tag="h1">
                                         Battery Backup Systems
                                      </CardTitle>
                                      <br></br>
                                      <Button
                                          className="btn-round"
                                          color="warning"
                                          href="#pablo"
                                          onClick={(e) => e.preventDefault()}
                                      >
                                          Shop Now
                                      </Button>
                                  </CardBody>
                              </Card>
                          </Col>

              <Col md="4">
                <Card
                  className="card-pricing"
                  data-background="image"
                  style={{
                    backgroundImage:
                      "url(" +
                      require("assets/img/Classics/house.webp") +
                      ")",
                  }}
                >
                  <CardBody>
                  <CardTitle tag="h1">
                      Grid-Tie Solar Power Systems
                                      </CardTitle>
                                      <br></br>
                     <Button
                      className="btn-round"
                      color="warning"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      Shop Now
                    </Button>
                  </CardBody>
                </Card>
               </Col>
                                                {/* Second Row */}
                              <TabContent activeTab={"pill-" + activePill}>
                                  <TabPane tabId={"pill-" + activePill} />
                                  <TabPane tabId={"pill-" + activePill} />
                              </TabContent>

                      </Row>

                      <div className="space-top" />

                      <Row>

                          <Col md="4">
                              <Card
                                  className="card-pricing"
                                  data-background="image"
                                  style={{
                                      backgroundImage:
                                          "url(" +
                                          require("assets/img/Classics/batteries.webp") +
                                          ")",
                                  }}
                              >
                                  <CardBody>
                                      <CardTitle tag="h1">
                                          Solar Batteries 
                                      </CardTitle>
                                      <br></br>
                                      <Button
                                          className="btn-round"
                                          color="warning"
                                          href="#pablo"
                                          onClick={(e) => e.preventDefault()}
                                      >
                                          Shop Now
                                      </Button>
                                  </CardBody>
                              </Card>
                          </Col>

                          <Col md="4">
                              <Card
                                  className="card-pricing"
                                  data-background="image"
                                  style={{
                                      backgroundImage:
                                          "url(" +
                                          require("assets/img/Classics/cool_shot.webp") +
                                          ")",
                                  }}
                              >
                                  <CardBody>
                                      <CardTitle tag="h1">
                                          Solar Panels
                                      </CardTitle>
                                      <br></br>
                                      <br></br>
                                      <br></br>
                                      <br></br>
                                      <Button
                                          className="btn-round"
                                          color="warning"
                                          href="#pablo"
                                          onClick={(e) => e.preventDefault()}
                                      >
                                          Shop Now
                                      </Button>
                                  </CardBody>
                              </Card>
                          </Col>

                          <Col md="4">
                              <Card
                                  className="card-pricing"
                                  data-background="image"
                                  style={{
                                      backgroundImage:
                                          "url(" +
                                          require("assets/img/Classics/sma.webp") +
                                          ")",
                                  }}
                              >
                                  <CardBody>
                                      <CardTitle tag="h1">
                                          Solar Inverters
                                      </CardTitle>
                                      <br></br>
                                      <Button
                                          className="btn-round"
                                          color="warning"
                                          href="#pablo"
                                          onClick={(e) => e.preventDefault()}
                                      >
                                          Shop Now
                                      </Button>
                                  </CardBody>
                              </Card>
                          </Col>
                     
            </Row>
          </Container>
        </div>
        {/* ********* END PRICING 2 ********* */}
 
      </div>
    </>
  );
}

export default SectionPricing;
