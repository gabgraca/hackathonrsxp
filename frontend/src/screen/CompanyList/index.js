import React from "react";
import { Link } from 'react-router-dom';
import Header from "../../components/Header";

import { Container } from "./styles";

export default function CompanyList() {
  return (
    <>
      <Header />
      <Container>
      <Link to="/visit">Adicionar nova visita</Link>
        <ul>
        <li>
            <span>Uber Technologies</span>
            <p>
              Empresa de tecnolgia que que faz intermédio de serviço de taxe
              entre motorista e passageiro.
            </p>
           
          </li>
          <li>
            <span>Uber Technologies</span>
            <p>
              Empresa de tecnolgia que que faz intermédio de serviço de taxe
              entre motorista e passageiro.
            </p>
           
          </li>
          <li>
            <span>Uber Technologies</span>
            <p>
              Empresa de tecnolgia que que faz intermédio de serviço de taxe
              entre motorista e passageiro.
            </p>
           
          </li>
          <li>
            <span>Uber Technologies</span>
            <p>
              Empresa de tecnolgia que que faz intermédio de serviço de taxe
              entre motorista e passageiro.
            </p>
           
          </li>
          <li>
            <span>Uber Technologies</span>
            <p>
              Empresa de tecnolgia que que faz intermédio de serviço de taxe
              entre motorista e passageiro.
            </p>
           
          </li>
        </ul>
      </Container>
    </>
  );
}
