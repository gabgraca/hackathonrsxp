import React from 'react';
import {Link} from 'react-router-dom';
import { 
  Container,
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
          <Link to='/studentRegister/'>Cadastrar-se como aluno</Link>
        </CaixaBotao>
        <div className='bar'></div>
        <CaixaBotao>
          <strong>Quero fornecer uma experiência para alunos do ensino médio</strong>
          <Link to='/companyRegister/'>Cadastrar-se como empresa</Link>
        </CaixaBotao>
      </Subcontainer>
    </Container>
  )
}