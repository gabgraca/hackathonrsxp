import React, { useState, useEffect } from 'react';

import { 
  Container,
  FormContainer,
  Title,
  InputItem,
  Button,
} from './styles';
import Header from '../../components/Header'

export default function StudentRegister({
  user,
  registerUser
}) {
  return (
    <Container>
      <Header />

      <FormContainer onSubmit={(e) => registerUser(e)}>
        <Title>Cadastro do aluno</Title>
        <InputItem name='email' type='email' placeholder="Seu email" />
        <InputItem name='nome' type='text' placeholder="Seu nome"/>
        <InputItem name='cpf' type='text' placeholder="Seu CPF"/>
        <InputItem name='file' type='file' placeholder="Anexar comprovante de matrícula"/>
        <Button >Cadastrar</Button>
      </FormContainer>

    </Container>
  )
}