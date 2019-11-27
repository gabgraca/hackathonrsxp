import styled from "styled-components";

import logo from "../../assets/Logo.svg";

export const Container = styled.div`
  background: rgba(255, 255, 255, 0.75);
`;

export const MenuItems = styled.div`
  width: 100%;
  height: 80px;

  margin: 0 auto;

  align-items: center;
  justify-content: space-between;
  display: flex;
  align-items: center;
  max-width: 1100px;

  a {
    color: #444;
    font-weight: bold;
    text-decoration: none;
  }
`;

export const Logo = styled.img.attrs({
  src: logo,
  alt: "logo image"
})`
  height: 75px;
  width: auto;
  display: flex;
  align-items: center;
`;
