import styled from "styled-components";
import React from "react";

export const HeaderStyles = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;

  background-color: white;
  height: 7vh;
  box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.5);

  padding: 0 16px;

  h1 {
    font-weight: 300;
  }
`;

export default function Header() {
  return (
    <HeaderStyles>
      <h1>Lilliput.ly 🤏</h1>
    </HeaderStyles>
  );
}
