import styled from 'styled-components'
import logo from '../../assets/Logo.svg'
import { Input, Form } from '@rocketseat/unform'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
`

export const ContainerForm = styled(Form)`
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

export const InputItem = styled(Input).attrs({
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
    type: 'submit'
})`
    width: 287px;
    height: 50px;
    font-size: 18px;
    color: #FFF;
    background: #7A72Bf;
    border: 0;
    margin-top: 20px;
`