import React from 'react';

import { 
  Container,
  FormContainer,
  Title,
  InputItem,
  TextAreaItem,
  Button,
} from './styles';
import Header from '../../components/Header'

export default function CompanyRegister({
  registerCompany
}) {
  return (
    <Container>
      <Header />

      <FormContainer onSubmit={registerCompany}>
        <Title>Cadastro de empresa</Title>
        <InputItem name='email' type='email' placeholder="Email do contato" />
        <InputItem name='nome' type='text' placeholder="Nome da empresa"/>
        <InputItem name='cnpj' type='text' placeholder="CNPJ"/>
        
        <TextAreaItem name='descricao' cols={33} rows={5} ></TextAreaItem>

        <Button>Cadastrar</Button>
      </FormContainer>
    </Container>
  )
}