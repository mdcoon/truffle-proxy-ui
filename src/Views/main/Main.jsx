import React from "react";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import classNames from "classnames";
import * as align from "Constants/alignments";
import Navi from "./Nav.jsx";
import VersionsTable from "./versions";
import HistoricalData from "./txns";
import Interactions from "./interactions";
import Settings from "./settings";

export default class Main extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1"
    };
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div>
        <Navi />
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classNames({ active: this.state.activeTab === "1" })}
              onClick={() => {
                this.toggle("1");
              }}
            >
              Versions
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classNames({ active: this.state.activeTab === "2" })}
              onClick={() => {
                this.toggle("2");
              }}
            >
              Historical Data
            </NavLink>
          </NavItem>
          {/* <NavItem>
            <NavLink
              className={classNames({ active: this.state.activeTab === "3" })}
              onClick={() => {
                this.toggle("3");
              }}
            >
              Interactions
            </NavLink>
          </NavItem> */}
          <NavItem>
            <NavLink
              className={classNames({ active: this.state.activeTab === "3" })}
              onClick={() => {
                this.toggle("3");
              }}
            >
              Settings
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Interactions />
            <VersionsTable />
          </TabPane>
          <TabPane tabId="2">
            <HistoricalData />
          </TabPane>
          {/* <TabPane tabId="3">
            <Interactions />
          </TabPane> */}
          <TabPane tabId="3">
            <Settings />
          </TabPane>
        </TabContent>
      </div>
    );
  }
}
