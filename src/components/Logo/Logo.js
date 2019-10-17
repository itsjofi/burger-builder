import React from "react";
import styled from "styled-components";

import burgerLogo from "../../assets/images/burger-logo.png";

const Div = styled.div`
  background-color: white;
  padding: 8px;
  height: 100%;
  box-sizing: border-box;
  border-radius: 5px;
`;

const Img = styled.img`
  height: 100%;
`;

const logo = props => (
  <Div style={{ height: props.height }}>
    <Img src={burgerLogo} alt="MyBurger" />
  </Div>
);

export default logo;
