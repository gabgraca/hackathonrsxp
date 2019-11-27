import React, { useState, useEffect } from "react";

import Header from "../../components/Header";
import api from "../../services/api";
import { Container } from "./styles";

export default function List() {
  const [companyList, setCompanyList] = useState([]);

  useEffect(() => {
    async function loadList() {
      const response = await api.get("empresas");
      setCompanyList(response.data);
    }
    loadList();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <ul>
          {companyList.map(clist => (
            <li>
              <p>02/01/2020</p>
              <span>{clist.nome}</span>
              <strong>{clist.data}</strong>
              <p>clist.email</p>
              <button>Inscrever-se</button>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
