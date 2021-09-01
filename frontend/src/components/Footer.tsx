import React from "react";
import styled from "styled-components";

const FooterStyles = styled.footer`
  height: 10vh;

  a {
    font-weight: 600;

    &:visited {
      color: inherit;
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <p>
        Made with 💛 by{" "}
        <a href="https://github.com/twalton83">Tatiana Walton</a>
      </p>
    </FooterStyles>
  );
}
