import React, { useState, useEffect } from "react";

import Header from "../../components/Header";
import api from "../../services/api";
import { Container } from "./styles";
import history from '../../services/history'

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
          {console.log(companyList)}
          {companyList.map((clist, index) => (
            <li key={index} >
              <p>02/01/2020</p>
              <span>{clist.nome}</span>
              <strong>{clist.data}</strong>
              <p>{clist.descricao}</p>
              <button onClick={() => history.push('/registersuccess')}>Inscrever-se</button>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}
