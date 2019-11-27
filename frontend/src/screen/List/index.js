import React, {useState, useEffect} from "react";

import Header from "../../components/Header";
import api from '../../services/api';
import { Container } from "./styles";


export default function List() {

  const [companyList, setCompanyList] = useState([]);

  useEffect(() => {

    // api.get()....
    // Format Date ??
    // setCompanyList()...


  }, []);

  return (
    <>
      <Header />
      <Container>        
        <ul>
           {/**
            companyList.map(clist => (
            <li>
            <p>
              02/01/2020
            </p>
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
            <button>Inscrever-se</button>
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
            <button>Inscrever-se</button>
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
            <button>Inscrever-se</button>
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
            <button>Inscrever-se</button>
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
            <button>Inscrever-se</button>
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
            <button>Inscrever-se</button>
          </li>
        </ul>
      </Container>
    </>
  );
}