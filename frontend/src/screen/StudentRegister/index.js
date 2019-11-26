import React, { useState, useEffect } from 'react';

import { 
  Container,
  Form,
  Title,
  Input,
  Button,
} from './styles';
import Header from '../../components/Header'

export default function StudentRegister() {
  return (
    <Container>
      <Header />

      <Form>
        <Title>Cadastro do aluno</Title>
        <Input name='email' type='email' placeholder="Seu email" />
        <Input name='name' type='text' placeholder="Seu nome"/>
        <Input name='cpf' type='text' placeholder="Seu CPF"/>
        <Input name='file' type='file' placeholder="Anexar comprovante de matrícula"/>
        <Button>Cadastrar</Button>
      </Form>

    </Container>
  )
}