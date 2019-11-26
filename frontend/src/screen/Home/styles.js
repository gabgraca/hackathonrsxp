import styled from 'styled-components'
import logo from '../../assets/Logo.svg'

export const Container = styled.div`
    height: 400px;
`

export const ContainerForm = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    max-width: 400px;
    width: 100%;
`

export const Img = styled.img.attrs({
    alt: 'Logo image',
    src: logo
})`
    width: 180px;
    height: auto;
`

export const Input = styled.input.attrs({
    placeholder: 'Seu email'
})`
    width: 287px;
    height: 50px;
    font-size: 18px;
    color: #a0a0a0;
    background: #FFF;
    &::placeholder {
        color: #a0a0a0;
        font-size: 18px;
    }
    border: none;
    padding: 0 20px;
    margin-top: 20px;
`

export const Button = styled.button.attrs({
    type: 'button'
})`
    width: 287px;
    height: 50px;
    font-size: 18px;
    color: #FFF;
    background: #7A72Bf;
    border: 0;
    margin-top: 20px;
`

export const Subcontainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 650px;
  height: 300px;
  margin: 100px auto;

`;

export const CaixaBotao = styled.div`
  width: 300px;
  height: 300px;
  background: #FFF;
  padding: 40px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-content: center;
  strong {
    font-size: 24px;
    text-align: center;
  }
  button{
    width: 100%;
    margin-top: auto;
  }
`;