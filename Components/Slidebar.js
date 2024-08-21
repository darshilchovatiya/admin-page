import { Icon } from "@iconify/react";
import React from "react";
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from "reactstrap";
import { SideArray } from "./dumydata";

export default function Slidebar() {
  return (
    <div className="side_nav">
      <div className="logo">
        <img src="/desktop-logo.png" className="image"></img>
      </div>
      <div className="items">
          {SideArray.map((d) => 
            <div className="dash">
              <div className="icon2">
                <Icon icon={d.icon} />
              </div>
              <a href="#">
                <span>{d.name}</span>
              </a>
              <div className="icon2">
                <Icon icon="ri:arrow-right-s-line" />
              </div>
            </div>
          )}
        </div>

        <div>
          {/* <div className="dash">
          <div className="icon">
            <Icon icon="" />
          </div>
          <a href="#">
            <span></span>
          </a>
          <div className="icon">
            <Icon icon="ri:arrow-right-s-line" />
          </div>
        </div>

        <div className="dash">
          <div className="icon">
            <Icon icon="" />
          </div>
          <a href="#">
            <span></span>
          </a>
          <div className="icon">
            <Icon icon="ri:arrow-right-s-line" />
          </div>
        </div>

        <div className="dash">
          <div className="icon">
            <Icon icon="" />
          </div>
          <a href="#">
            <span></span>
          </a>
          <div className="icon">
            <Icon icon="ri:arrow-right-s-line" />
          </div>
        </div>

        <div className="dash">
          <div className="icon">
            <Icon icon="" />
          </div>
          <a href="#">
            <span></span>
          </a>
          <div className="icon">
            <Icon icon="ri:arrow-right-s-line" />
          </div>
        </div>

        <div className="dash">
          <div className="icon">
            <Icon icon="" />
          </div>
          <a href="#">
            <span></span>
          </a>
          <div className="icon">
            <Icon icon="ri:arrow-right-s-line" />
          </div>
        </div>

        <div className="dash">
          <div className="icon">
            <Icon icon="" />
          </div>
          <a href="#">
            <span></span>
          </a>
          <div className="icon">
            <Icon icon="ri:arrow-right-s-line" />
          </div>
        </div>

        <div className="dash">
          <div className="icon">
            <Icon icon="" />
          </div>
          <a href="#">
            <span></span>
          </a>
          <div className="icon">
            <Icon icon="ri:arrow-right-s-line" />
          </div>
        </div>

        <div className="dash">
          <div className="icon">
            <Icon icon="" />
          </div>
          <a href="#">
            <span></span>
          </a>
          <div className="icon">
            <Icon icon="ri:arrow-right-s-line" />
          </div>
        </div>

        <div className="dash">
          <div className="icon">
            <Icon icon="" />
          </div>
          <a href="#">
            <span></span>
          </a>
          <div className="icon">
            <Icon icon="ri:arrow-right-s-line" />
          </div>
        </div>

        <div className="dash">
          <div className="icon">
            <Icon icon="" />{" "}
          </div>
          <a href="#">
            <span></span>
          </a>
          <div className="icon">
            <Icon icon="ri:arrow-right-s-line" />
          </div>
        </div> */}
        </div>
      </div>
  );
}
