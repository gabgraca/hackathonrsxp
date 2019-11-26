import styled from "styled-components";

import logo from "../../assets/Logo.svg";

export const Container = styled.div`
  background: #fff;
  width: 100%;
  height: 80px;
`;

export const MenuItems = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: row;
  max-width: 1100px;
  width: 100%;
  justify-content: space-between;
  margin: 0 auto;
  align-items: center;
`;

export const Logo = styled.img.attrs({
  src: logo,
  alt: "logo image"
})`
  height: 75px;
  width: auto;
`;
