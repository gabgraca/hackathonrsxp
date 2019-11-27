import React from "react";
import { Link } from 'react-router-dom';
import Header from "../../components/Header";

import { Container } from "./styles";

export default function CompanyList({
  opportunities,
  company,
}) {

  return (
    <>
      <Header />
      <Container>
      <Link to="/visit">Adicionar nova visita</Link>
        <ul>
          {/**
            companyList.map(clist => (
            <li>
            <span>{clist.nomedaempresa}</span>
            <strong>{clist.data}</strong>
            <p>
              clist.descricao
            </p>
           
          </li>
           )) 
           */}
        <li>
            <p>
              02/01/2020
            </p>
            <span>Uber Technologies</span>
            <p>
              Empresa de tecnolgia que que faz intermédio de serviço de taxe
              entre motorista e passageiro.
            </p>
           
          </li>
          <li>
            <p>
              02/01/2020
            </p>
            <span>Uber Technologies</span>
            <p>
              Empresa de tecnolgia que que faz intermédio de serviço de taxe
              entre motorista e passageiro.
            </p>
           
          </li>
          <li>
            <p>
              02/01/2020
            </p>
            <span>Uber Technologies</span>
            <p>
              Empresa de tecnolgia que que faz intermédio de serviço de taxe
              entre motorista e passageiro.
            </p>
           
          </li>
          <li>
            <p>
              02/01/2020
            </p>
            <span>Uber Technologies</span>
            <p>
              Empresa de tecnolgia que que faz intermédio de serviço de taxe
              entre motorista e passageiro.
            </p>
           
          </li>
          <li>
            <p>
              02/01/2020
            </p>
            <span>Uber Technologies</span>
            <p>
              Empresa de tecnolgia que que faz intermédio de serviço de taxe
              entre motorista e passageiro.
            </p>
           
          </li>
          <li>
            <p>
              02/01/2020
            </p>
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
