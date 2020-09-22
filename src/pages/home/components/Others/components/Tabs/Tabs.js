import React from "react";
import styled, { css } from "styled-components";

const Layout = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  margin-top: 30px;
  padding: 0 100px;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 35px;
  }

  @media (min-width: 768px) and (max-width: 1224px) {
    padding: 0 85px;
  }

  @media (min-width: 1224px) and (max-width: 1824px) {
    padding: 0 155px;
  }
`;

const Tab = styled.span`
  font-size: 20px;
  padding: 12px 0 16px;
  margin: 5px 22px;
  cursor: pointer;
  font-weight: 700;
  &:hover {
    color: #008fb4;
    text-decoration: underline;
  }
  ${(props) => {
    if (props.active) {
      return css`
        color: #008fb4;
        text-decoration: underline;
      `;
    }
  }}
`;

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "FIXING_STUFF",
    };
  }

  render() {
    const { activeTab } = this.state;

    return (
      <Layout>
        <Tab
          active={activeTab === "MOVING_HOME"}
          onClick={() => {
            this.setState({
              activeTab: "MOVING_HOME",
            });
          }}
        >
          Moving home
        </Tab>
        <Tab
          active={activeTab === "STARTING_A_BUSINESS"}
          onClick={() => {
            this.setState({
              activeTab: "STARTING_A_BUSINESS",
            });
          }}
        >
          Starting a business
        </Tab>
        <Tab
          active={activeTab === "FIXING_STUFF"}
          onClick={() => {
            this.setState({
              activeTab: "FIXING_STUFF",
            });
          }}
        >
          Fixing stuff
        </Tab>
        <Tab
          active={activeTab === "HOSTING_A_PARTY"}
          onClick={() => {
            this.setState({
              activeTab: "HOSTING_A_PARTY",
            });
          }}
        >
          Hosting a party
        </Tab>
        <Tab
          active={activeTab === "SOMETHING_DIFFERENT"}
          onClick={() => {
            this.setState({
              activeTab: "SOMETHING_DIFFERENT",
            });
          }}
        >
          Something different
        </Tab>
      </Layout>
    );
  }
}

export default Tabs;