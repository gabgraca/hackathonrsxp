import React, { useState, useEffect } from 'react';

import { 
  Container,
  ContainerForm,
  Img,
  Input,
  Button,
  Subcontainer,
  CaixaBotao
} from './styles';
import Header from '../../components/Header'

export default function Home() {
  return (
    <Container>
      <Header />
      <Subcontainer>
      <CaixaBotao>
        <strong>Quero ter uma experiência na área de Tecnologia</strong>
        <Button type="button">Cadastrar-se como aluno</Button>
      </CaixaBotao>
      <CaixaBotao>
        <strong>Quero fornecer uma experiência para alunos do ensino médio</strong>
        <Button type="button">Cadastrar-se como empresa</Button>
        </CaixaBotao>
      </Subcontainer>
    </Container>
  )
}