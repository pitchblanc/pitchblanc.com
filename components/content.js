import { Tab } from "react-bootstrap";
import { Fragment } from "react";
import Lorum from "./lorum";

const contentStyle = {
  padding: 32
};

export default props => {
  return (
    <Fragment>
      <Tab.Content style={contentStyle}>
        <Tab.Pane eventKey="work">
          work
          <Lorum />
        </Tab.Pane>
        <Tab.Pane eventKey="about">
          about
          <Lorum />
        </Tab.Pane>
        <Tab.Pane eventKey="team">
          team
          <Lorum />
        </Tab.Pane>
        <Tab.Pane eventKey="contact">
          contact
          <Lorum />
        </Tab.Pane>
      </Tab.Content>
    </Fragment>
  );
};