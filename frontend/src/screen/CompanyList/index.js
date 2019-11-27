import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { useParams } from "react-router-dom";

import { Container } from "./styles";

export default function CompanyList({ opportunities, company }) {
  const [{ email }] = useState(useParams());

  return (
    <>
      <Header />
      <Container>
        <Link to={`/visit/${email}`}>Adicionar nova visita</Link>
        <ul>
          {opportunities.map(clist => (
            <li>
              <span>{clist.empresa.nome}</span>
              <strong>{clist.vagas}</strong>
              <p>clist.empresa.descricao</p>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
