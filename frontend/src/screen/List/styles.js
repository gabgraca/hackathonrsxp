import styled from "styled-components";

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 50px 0;
  text-align: center;

  ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    margin-top: 50px;

    li {
      display: flex;
      flex-direction: column;
      background: #ffffff;
      box-shadow: 2px 1px 4px rgba(0, 0, 0, 0.3);
      padding: 30px;

      span {
        font-weight: bold;
        font-size: 24px;
        line-height: 42px;
        color: #444444;
        text-align: center;
        margin-top: 20px;
      }

      p {
        margin-top: 20px;
        font-weight: bold;
        font-size: 16px;
        line-height: 26px;
        color: #888888;
      }

      button {
        margin-top: 20px;
        border: 0;
        background: #745ebe;
        font-weight: bold;
        color: #fff;
        font-size: 18px;
        height: 42px;
        cursor: pointer;
      }
    }
  }

  button {
    border: 0;
    background: #745ebe;
    font-weight: bold;
    color: #fff;
    font-size: 18px;
    height: 42px;
    cursor: pointer;
  }
`;

export const CardEmpresa = styled.ul`
  list-style: none;
  display: flex;
  margin-top: 50px;
  width: 30%;

  li {
    float: left;
    flex-direction: column;
  }
`;
