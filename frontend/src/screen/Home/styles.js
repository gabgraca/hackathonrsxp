import styled from "styled-components";
import logo from "../../assets/Logo.svg";
import backgroundImage from "../../assets/background.png";

export const Container = styled.div`
  height: 100vh;
  background-image: url(${backgroundImage});
`;

export const Img = styled.img.attrs({
  alt: "Logo image",
  src: logo
})`
  width: 180px;
  height: auto;
`;

export const Input = styled.input.attrs({
  placeholder: "Seu email"
})`
  width: 287px;
  height: 50px;
  font-size: 18px;
  color: #a0a0a0;
  background: #fff;
  &::placeholder {
    color: #a0a0a0;
    font-size: 18px;
  }
  border: none;
  padding: 0 20px;
  margin-top: 20px;
`;

export const Button = styled.button.attrs({
  type: "button"
})`
  width: 287px;
  height: 50px;
  font-size: 18px;
  color: #fff;
  background: #7a72bf;
  border: 0;
  margin-top: 20px;
`;

export const Subcontainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1100px;
  width: 100%;
  height: 300px;
  margin: 100px auto;

  .bar {
    width: 2px;
    height: 100px;
    margin-top: 50px;
    background: #fff;
  }
`;

export const CaixaBotao = styled.div`
  width: 545px;
  height: 400px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;

  strong {
    font-size: 40px;
    text-align: left;
    color: #ffffff;
  }

  a {
    width: 250px;
    height: 100px;
    margin-top: auto;
    color: #ffffff;
    text-decoration: none;
    border: 2px solid #fff;

    font-size: 20px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s;

    &:hover {
      background: #7a72bf;
    }
  }
`;
