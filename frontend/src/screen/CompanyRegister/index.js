import React from 'react';

import { 
  Container,
  Form,
  Title,
  Input,
  TextArea,
  Button,
} from './styles';
import Header from '../../components/Header'

export default function CompanyRegister() {
  return (
    <Container>
      <Header />

      <Form>
        <Title>Cadastro de empresa</Title>
        <Input name='email' type='email' placeholder="Email do contato" />
        <Input name='name' type='text' placeholder="Nome da empresa"/>
        <Input name='cnpj' type='text' placeholder="CNPJ"/>
        
        <TextArea cols={33} rows={5} >Breve descrição da empresa</TextArea>

        <Button>Cadastrar</Button>
      </Form>
    </Container>
  )
}