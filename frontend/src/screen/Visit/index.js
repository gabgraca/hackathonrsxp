import React from 'react';

import { 
  Container,
  Form,
  Title,
  Input,
  Button,
} from './styles';
import Header from '../../components/Header'

export default function Visit() {
  return (
    <Container>
      <Header />

      <Form>
        <Title>Cadastro de Visita</Title>
        <Input name='data' type='email' placeholder="Data formato YYYY-MM-DD" />
        <Input name='vagas' type='text' placeholder="Quantidade de vagas"/>
        <Button>Cadastrar</Button>
      </Form>
    </Container>
  )
}