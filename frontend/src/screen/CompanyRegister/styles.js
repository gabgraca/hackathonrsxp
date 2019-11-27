import styled from 'styled-components'
import { Form, Input, Textarea } from '@rocketseat/unform'

export const Container = styled.div`
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
`

export const FormContainer = styled(Form)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    min-height: calc(100vh - 80px);
`

export const Title = styled.h2`
    color: #FFF;
    font-size: 28px;
`

export const InputItem = styled(Input).attrs({
    
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

export const TextAreaItem = styled(Textarea).attrs({
    placeholder: 'Breve descrição da empresa'
})`
    width: 287px;
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
    resize: none;
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