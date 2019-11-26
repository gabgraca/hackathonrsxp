import React from "react";

import Header from "../../components/Header";

import { Container, CardEmpresa } from "./styles";

export default function List() {
  return (
    <>
      <Header />
      <Container>
        <ul>
          <li>
            <span>Uber Technologies</span>
            <p>
              Empresa de tecnolgia que que faz intermédio de serviço de taxe
              entre motorista e passageiro.
            </p>
            <button>Inscrever-se</button>
          </li>
          <li>
            <span>Uber Technologies</span>
            <p>
              Empresa de tecnolgia que que faz intermédio de serviço de taxe
              entre motorista e passageiro.
            </p>
            <button>Inscrever-se</button>
          </li>
          <li>
            <span>Uber Technologies</span>
            <p>
              Empresa de tecnolgia que que faz intermédio de serviço de taxe
              entre motorista e passageiro.
            </p>
            <button>Inscrever-se</button>
          </li>
        </ul>
      </Container>
    </>
  );
}
