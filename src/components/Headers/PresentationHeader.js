/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core comments

function PresentationHeader() {
  return (
    <>
      <div className="wrapper">
        <div
          className="page-header section-dark"
          style={{
            backgroundImage:
              "url(" + require("assets/img/background.jpeg") + ")",
          }}
        >
          <div className="content-center">
            <Container>
              <div className="">
                <h1 className="presentation-title">Build Energy Independence

                              </h1>

              </div>
              <h2 className="presentation-subtitle text-center">
                              altE is the #1 online source for solar energy and energy storage systems, education and installation support.
              </h2>
            </Container>
          </div>

        </div>
      </div>
    </>
  );
}

export default PresentationHeader;
