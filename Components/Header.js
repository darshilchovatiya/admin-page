import { Icon } from "@iconify/react";
import React from "react";
import {
  Badge,
  Button,
  CloseButton,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";

export default function Headers() {
  return (
    <>
      <div className="page">
        <div className="header">
          <div className="header-content-left">
            <div className="second-content">
              <div className="side-icon">
                <Icon icon="quill:hamburger-sidebar" />
              </div>
              <div className="search-container">
                <input
                  type="text"
                  className="search"
                  placeholder="Search for Results....."
                />
                <div className="icon">
                  <Icon icon="material-symbols:search" />
                </div>
              </div>
              <div className="drop-main">
                <div className="dropdown-list">
                  <UncontrolledDropdown>
                    <DropdownToggle caret color="gray">
                      Sales Dashboard
                    </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem header>Sales Dashboard</DropdownItem>
                      <hr />
                      <DropdownItem>Analytics Dashboard</DropdownItem>
                      <hr />
                      <DropdownItem>Ecommerce Dashboard</DropdownItem>
                      <hr />
                      <DropdownItem>CRM Dashboard</DropdownItem>
                      <hr />
                      <DropdownItem>HRM Dashboard</DropdownItem>
                      <hr />
                      <DropdownItem>NFT Dashboard</DropdownItem>
                      <hr />
                      <DropdownItem>Crypto Dashboard</DropdownItem>
                      <hr />
                      <DropdownItem>Jobs Dashboard</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
              </div>
            </div>
          </div>

          <div className="header-content-right">
            <div className="country-dropdown">
              <UncontrolledDropdown color="white">
                <DropdownToggle color="fullwhite">
                  <img src="/us_flag.jpg"></img>
                </DropdownToggle>
                <DropdownMenu color="white">
                  <DropdownItem>
                    <div className="country-items">
                      <img src="/us_flag.jpg"></img>
                      <span className="fw-medium lh-1">English </span>
                    </div>
                  </DropdownItem>
                  <DropdownItem>
                    {" "}
                    <div className="country-items">
                      <img src="/spain_flag.jpg"></img>
                      <span className="fw-medium lh-1">Spanish </span>
                    </div>
                  </DropdownItem>
                  <DropdownItem>
                    {" "}
                    <div className="country-items">
                      <img src="/french_flag.jpg"></img>
                      <span className="fw-medium lh-1">French </span>
                    </div>
                  </DropdownItem>
                  <DropdownItem>
                    {" "}
                    <div className="country-items">
                      <img src="/germany_flag.jpg"></img>
                      <span className="fw-medium lh-1">German </span>
                    </div>
                  </DropdownItem>
                  <DropdownItem>
                    {" "}
                    <div className="country-items">
                      <img src="/italy_flag.jpg"></img>
                      <span className="fw-medium lh-1">Italian </span>
                    </div>
                  </DropdownItem>
                  <DropdownItem>
                    {" "}
                    <div className="country-items">
                      <img src="/russia_flag.jpg"></img>
                      <span className="fw-medium lh-1">Russian </span>
                    </div>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
            <div className="dark-img">
              <Icon icon="circum:dark" />
            </div>
            <div className="cart-dropdown">
              <UncontrolledDropdown color="white">
                <DropdownToggle color="fullwhite">
                  <img src="/cart.jpeg"></img>
                </DropdownToggle>
                <DropdownMenu color="white">
                  <DropdownItem header>
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="mb-0 fs-16">
                        Cart Items
                        <Badge>5</Badge>
                      </p>
                      <span>
                        <span className="text-muted me-1">Total:</span>
                        <span className="text-primary fw-medium">$14,289</span>
                      </span>
                    </div>
                    <hr />
                  </DropdownItem>

                  <DropdownItem>
                    <div className="cart-items">
                      <img src="/cart1.jpg"></img>
                      <div className="item1_text">
                        <div className="text1">
                          <div className="line1">
                            <span>Pink High Heel Sandals</span>
                            <div className="price">
                              <span>$499.00</span>
                            </div>
                            <Icon
                              icon="material-symbols:close"
                              height={25}
                              width={30}
                            />
                          </div>
                          <div className="line2">
                            <ul>
                              <li>Quantity: 01</li>
                              <li>
                                <span className="badge bg-light text-default border">
                                  In Stock
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DropdownItem>
                  <DropdownItem>
                    <div className="cart-items">
                      <img src="/cart2.jpg"></img>
                      <div className="item1_text">
                        <div className="text1">
                          <div className="line1">
                            <span>Pink High Heel Sandals</span>
                            <div className="price">
                              <span>$129.00</span>
                            </div>
                            <Icon
                              icon="material-symbols:close"
                              height={25}
                              width={30}
                            />
                          </div>
                          <div className="line2">
                            <ul>
                              <li>Quantity: 01</li>
                              <li>
                                <span className="badge bg-light text-default border">
                                  In Stock
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DropdownItem>
                  <DropdownItem>
                    <div className="cart-items">
                      <img src="/cart3.jpg"></img>
                      <div className="item1_text">
                        <div className="text1">
                          <div className="line1">
                            <span>Pink High Heel Sandals</span>
                            <div className="price">
                              <span>$299.99</span>
                            </div>
                            <Icon
                              icon="material-symbols:close"
                              height={25}
                              width={30}
                            />
                          </div>
                          <div className="line2">
                            <ul>
                              <li>Quantity: 01</li>
                              <li>
                                <span className="badge bg-light text-default border">
                                  In Stock
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DropdownItem>
                  <DropdownItem>
                    <div className="cart-items">
                      <img src="/cart4.jpg"></img>
                      <div className="item1_text">
                        <div className="text1">
                          <div className="line1">
                            <span>Pink High Heel Sandals</span>
                            <div className="price">
                              <span>$149.99</span>
                            </div>
                            <Icon
                              icon="material-symbols:close"
                              height={25}
                              width={30}
                            />
                          </div>
                          <div className="line2">
                            <ul>
                              <li>Quantity: 01</li>
                              <li>
                                <span className="badge bg-light text-default border">
                                  In Stock
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DropdownItem>
                  <DropdownItem>
                    <div className="cart-items">
                      <img src="/cart5.jpg"></img>
                      <div className="item1_text">
                        <div className="text1">
                          <div className="line1">
                            <span>Pink High Heel Sandals</span>
                            <div className="price">
                              <span>$310.79</span>
                            </div>
                            <Icon
                              icon="material-symbols:close"
                              height={25}
                              width={30}
                            />
                          </div>
                          <div className="line2">
                            <ul>
                              <li>Quantity: 01</li>
                              <li>
                                <span className="badge bg-light text-default border">
                                  In Stock
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>

            <div className="notification-img">
              <Icon icon="iconamoon:notification" />
            </div>
            <div className="fullscreen-img">
              <Icon icon="material-symbols:fullscreen" />
            </div>
            <div className="man-img">
              <img src="/man.jpg"></img>
              <span className="fw-medium lh-1">Mr. Stark </span>
            </div>
            <div className="setting-img">
              <Icon icon="uil:setting" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
