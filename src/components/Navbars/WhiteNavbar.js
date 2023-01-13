import React from "react";
import { Link } from "react-router-dom";
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  UncontrolledTooltip,
} from "reactstrap";
// core components

function WhiteNavbar() {
  const [bodyClick, setBodyClick] = React.useState(false);
  const [collapseOpen, setCollapseOpen] = React.useState(true);
  React.useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    // initialise
  
  });
  return (
    <>
      {bodyClick ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setBodyClick(false);
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className="fixed-top" expand="lg" id="navbar-main">
        <Container>
          <div className="navbar-translate">
                      <NavbarBrand id="navbar-brand" to="/index" tag={Link}>
                          <img 
                              alt="altE"
                              className="grid__img layer"
                      
                              src={require("assets/img/altE.png")}
                          />
                          
            </NavbarBrand>
            <UncontrolledTooltip placement="bottom" target="navbar-brand">
                          altE
            </UncontrolledTooltip>
            <button
              className="navbar-toggler"
              id="navigation"
              type="button"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setBodyClick(true);
                setCollapseOpen(true);
              }}
            >
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </button>
          </div>
          <Collapse navbar isOpen={collapseOpen}>
            <Nav className="ml-auto" navbar>

                          <UncontrolledDropdown nav inNavbar>
                              <DropdownToggle color="default" caret nav>
                                  Shop
                              </DropdownToggle>

                              <DropdownMenu className="dropdown-danger">
                                  <DropdownItem
                                      href="https://www.altestore.com/store/solar-panels-c541/"
                                      
                                  >
                                      Solar Panels
                                  </DropdownItem>
                                                                  

                                  <UncontrolledDropdown>
                                      <DropdownToggle
                                          className="dropdown-item"
                                          color="default"
                                          tag="a"
                                          caret
                                          onClick={(e) => e.preventDefault()}
                                      >
                                          Solar Power Systems
                                      </DropdownToggle>

                                      <DropdownMenu className="dropdown-danger">
                                          <DropdownItem
                                              href="https://www.altestore.com/store/solar-power-systems-c447/"
                                              
                                          >
                                              View All
                                          </DropdownItem>

                                          <DropdownItem
                                              href="https://www.altestore.com/store/solar-power-systems/off-grid-home-solar-power-systems-c567/"
                                              
                                          >
                                              Off-grid Home Solar Power Systems
                                          </DropdownItem>

                                          <DropdownItem
                                              href="https://www.altestore.com/store/solar-power-systems/off-grid-cabin-solar-power-systems-c466/"
                                              
                                          >
                                              Off-grid Cabin Solar Power Systems
                                          </DropdownItem>

                                          <DropdownItem
                                              href="https://www.altestore.com/store/solar-power-systems/grid-tie-solar-power-systems-c569/"
                                              
                                          >
                                              Grid-tie Solar Power Systems
                                          </DropdownItem>

                                          <DropdownItem
                                              href="https://www.altestore.com/store/solar-power-systems/battery-backup-solar-power-systems-c4446/"
                                              
                                          >
                                              Battery Backup Solar Power Systems 
                                          </DropdownItem>

                                          <DropdownItem
                                              href="https://www.altestore.com/store/solar-power-systems/tiny-house-solar-power-systems-c4442/"
                                              
                                          >
                                              Tiny House Solar Power Systems 
                                          </DropdownItem>

                                          <DropdownItem
                                              href="https://www.altestore.com/store/solar-power-systems/energy-storage-systems-ul9540-c4470/"
                                              
                                          >
                                              Energy Storage Systems 
                                          </DropdownItem>
                                    </DropdownMenu>
                                  </UncontrolledDropdown>

                                  <UncontrolledDropdown>
                                      <DropdownToggle
                                          className="dropdown-item"
                                          color="default"
                                          tag="a"
                                          caret
                                          onClick={(e) => e.preventDefault()}
                                      >
                                          Deep Cycle Batteries 
                                      </DropdownToggle>

                                      <DropdownMenu className="dropdown-danger">
                                          <DropdownItem
                                              href="https://www.altestore.com/store/deep-cycle-batteries-c434/"

                                          >
                                              View All
                                          </DropdownItem>

                                          <DropdownItem
                                              href="https://www.altestore.com/store/solar-power-systems/off-grid-home-solar-power-systems-c567/"

                                          >
                                              Off-grid Home Solar Power Systems
                                          </DropdownItem>

                                          <DropdownItem
                                              href="https://www.altestore.com/store/solar-power-systems/off-grid-cabin-solar-power-systems-c466/"

                                          >
                                              Off-grid Cabin Solar Power Systems
                                          </DropdownItem>

                                          <DropdownItem
                                              href="https://www.altestore.com/store/solar-power-systems/grid-tie-solar-power-systems-c569/"

                                          >
                                              Grid-tie Solar Power Systems
                                          </DropdownItem>

                                          <DropdownItem
                                              href="https://www.altestore.com/store/solar-power-systems/battery-backup-solar-power-systems-c4446/"

                                          >
                                              Battery Backup Solar Power Systems
                                          </DropdownItem>

                                          <DropdownItem
                                              href="https://www.altestore.com/store/solar-power-systems/tiny-house-solar-power-systems-c4442/"

                                          >
                                              Tiny House Solar Power Systems
                                          </DropdownItem>

                                          <DropdownItem
                                              href="https://www.altestore.com/store/solar-power-systems/energy-storage-systems-ul9540-c4470/"

                                          >
                                              Energy Storage Systems
                                          </DropdownItem>
                                      </DropdownMenu>
                                  </UncontrolledDropdown>











                                  <UncontrolledDropdown>
                                      <DropdownToggle
                                          className="dropdown-item"
                                          color="default"
                                          tag="a"
                                          caret
                                          onClick={(e) => e.preventDefault()}
                                      >
                                          Submenu
                                      </DropdownToggle>
                                      <DropdownMenu className="dropdown-danger">
                                          <DropdownItem
                                              href="#pablo"
                                              onClick={(e) => e.preventDefault()}
                                          >
                                              Submenu action
                                          </DropdownItem>
                                          <DropdownItem
                                              href="#pablo"
                                              onClick={(e) => e.preventDefault()}
                                          >
                                              Submenu action
                                          </DropdownItem>
                                          <UncontrolledDropdown>
                                              <DropdownToggle
                                                  className="dropdown-item"
                                                  color="default"
                                                  tag="a"
                                                  caret
                                              >
                                                  Subsubmenu
                                              </DropdownToggle>
                                              <DropdownMenu className="dropdown-danger">
                                                  <DropdownItem
                                                      href="#pablo"
                                                      onClick={(e) => e.preventDefault()}
                                                  >
                                                      Subsubmenu action 1
                                                  </DropdownItem>
                                                  <DropdownItem
                                                      href="#pablo"
                                                      onClick={(e) => e.preventDefault()}
                                                  >
                                                      Subsubmenu action 2
                                                  </DropdownItem>
                                              </DropdownMenu>
                                          </UncontrolledDropdown>
                                          <UncontrolledDropdown>
                                              <DropdownToggle
                                                  className="dropdown-item"
                                                  color="default"
                                                  tag="a"
                                                  caret
                                              >
                                                  Second Subsubmenu
                                              </DropdownToggle>
                                              <DropdownMenu className="dropdown-danger">
                                                  <DropdownItem
                                                      href="#pablo"
                                                      onClick={(e) => e.preventDefault()}
                                                  >
                                                      Subsubmenu action 1
                                                  </DropdownItem>
                                                  <DropdownItem
                                                      href="#pablo"
                                                      onClick={(e) => e.preventDefault()}
                                                  >
                                                      Subsubmenu action 2
                                                  </DropdownItem>
                                              </DropdownMenu>
                                          </UncontrolledDropdown>
                                      </DropdownMenu>
                                  </UncontrolledDropdown>
                              </DropdownMenu>
                          </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle className="mr-2" color="default" caret nav>
                  Sections
                </DropdownToggle>
                <DropdownMenu className="dropdown-danger" right>
                  <DropdownItem to="/sections#headers" tag={Link}>
                    <i className="nc-icon nc-tile-56" />
                    Headers
                  </DropdownItem>
                  <DropdownItem to="/sections#features" tag={Link}>
                    <i className="nc-icon nc-settings" />
                    Features
                  </DropdownItem>
                  <DropdownItem to="/sections#blogs" tag={Link}>
                    <i className="nc-icon nc-bullet-list-67" />
                    Blogs
                  </DropdownItem>
                  <DropdownItem to="/sections#teams" tag={Link}>
                    <i className="nc-icon nc-single-02" />
                    Teams
                  </DropdownItem>
                  <DropdownItem to="/sections#projects" tag={Link}>
                    <i className="nc-icon nc-calendar-60" />
                    Projects
                  </DropdownItem>
                  <DropdownItem to="/sections#pricing" tag={Link}>
                    <i className="nc-icon nc-money-coins" />
                    Pricing
                  </DropdownItem>
                  <DropdownItem to="/sections#testimonials" tag={Link}>
                    <i className="nc-icon nc-badge" />
                    Testimonials
                  </DropdownItem>
                  <DropdownItem to="/sections#contact-us" tag={Link}>
                    <i className="nc-icon nc-mobile" />
                    Contact Us
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle color="default" caret nav>
                  Examples
                </DropdownToggle>
                <DropdownMenu className="dropdown-danger" right>
                  <DropdownItem to="/about-us" tag={Link}>
                    <i className="nc-icon nc-bank" />
                    About-us
                  </DropdownItem>
                  <DropdownItem to="/add-product" tag={Link}>
                    <i className="nc-icon nc-basket" />
                    Add Product
                  </DropdownItem>
                  <DropdownItem to="/blog-post" tag={Link}>
                    <i className="nc-icon nc-badge" />
                    Blog Post
                  </DropdownItem>
                  <DropdownItem to="/blog-posts" tag={Link}>
                    <i className="nc-icon nc-bullet-list-67" />
                    Blog Posts
                  </DropdownItem>
                  <DropdownItem to="/contact-us" tag={Link}>
                    <i className="nc-icon nc-mobile" />
                    Contact Us
                  </DropdownItem>
                  <DropdownItem to="/discover" tag={Link}>
                    <i className="nc-icon nc-world-2" />
                    Discover
                  </DropdownItem>
                  <DropdownItem to="/e-commerce" tag={Link}>
                    <i className="nc-icon nc-send" />
                    Ecommerce
                  </DropdownItem>
                  <DropdownItem to="/landing-page" tag={Link}>
                    <i className="nc-icon nc-spaceship" />
                    Landing Page
                  </DropdownItem>
                  <DropdownItem to="/login-page" tag={Link}>
                    <i className="nc-icon nc-lock-circle-open" />
                    Login Page
                  </DropdownItem>
                  <DropdownItem to="/product-page" tag={Link}>
                    <i className="nc-icon nc-album-2" />
                    Product Page
                  </DropdownItem>
                  <DropdownItem to="/profile-page" tag={Link}>
                    <i className="nc-icon nc-single-02" />
                    Profile Page
                  </DropdownItem>
                  <DropdownItem to="/register-page" tag={Link}>
                    <i className="nc-icon nc-bookmark-2" />
                    Register Page
                  </DropdownItem>
                  <DropdownItem to="/search-with-sidebar" tag={Link}>
                    <i className="nc-icon nc-zoom-split" />
                    Search Page
                  </DropdownItem>
                  <DropdownItem to="/settings" tag={Link}>
                    <i className="nc-icon nc-settings-gear-65" />
                    Settings Page
                  </DropdownItem>
                  <DropdownItem to="/twitter-redesign" tag={Link}>
                    <i className="nc-icon nc-tie-bow" />
                    Twitter
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

                         
                          <NavItem>
                <Button
                  className="btn-round"
                  color="danger"
                  href="https://www.altestore.com/diy-solar-resources/deciding-which-solar-pv-electric-system-is-right-for-you/"
                  target="_blank"
                >
                  <i className="nc-icon nc-cart-simple" /> Get a Quote
                </Button>
                          </NavItem>

                        

              <NavItem>
                          <Button
                              className="btn-round"
                              color="primary"
                              href="tel:8778784060"
                              target="_blank"
                          >
                              <i className="nc-icon nc-cart-simple" /> Call 877-878-4060
                          </Button>

                          </NavItem>

            </Nav>
          </Collapse>
              </Container>
             
                 
                 
                
          
      </Navbar>
    </>
  );
}

export default WhiteNavbar;
