import styled from "styled-components";
import React from "react";

export const HeaderStyles = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: transparent;
  color: white;

  height: 7vh;

  padding: 0 16px;

  h1 {
    font-weight: 400;
  }

  nav {
    width: 15%;
  }

  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style: none;

    a {
      text-decoration: none;
      color: inherit;
      font-weight: 600;
      font-size: 20px;
    }
  }
`;

export default function Header() {
  return (
    <HeaderStyles>
      <h1>Lilliput.ly 🤏</h1>
      <nav>
        <ul>
          <li>
            <a href="https://github.com/twalton83/lilliput.li">About</a>
          </li>
          <li>
            <a href="https://github.com/twalton83/lilliput.li">Github</a>
          </li>
        </ul>
      </nav>
    </HeaderStyles>
  );
}
