import styled from 'styled-components'
import logo from '../../assets/Logo.svg'

export const Container = styled.div`
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
`

export const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    min-height: calc(100vh - 80px);
`

export const Title = styled.h2`
    color: #000;
    font-size: 28px;
`

export const Input = styled.input.attrs({
    
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