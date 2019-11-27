import React, {useState} from 'react';
import ReactDate from '../../components/ReactDate'
import { useParams } from 'react-router-dom'
import api from '../../services/api';
import history from '../../services/history';

import { 
  Container,
  Rsform,
  Title,
  Rsinput,
  Button,
} from './styles';
import Header from '../../components/Header'



export default function Visit() {
  const [{ email }] = useState(useParams());
  
  async function handleSubmit({data, vagas}){
    // Pega o id da eampresa 
    const empresa = await api.get(`/empresa/${email}`);

    const {_id} = empresa.data;

    const visita = await api.post('/oportunidade', {
      empresa: _id,
      vagas: vagas,
      data: '2019-11-28',
    })
    
    history.push('/registersuccess');

  }

  return (
    

    <Container className="Container">
      <Header />

      <Rsform id="dados" onSubmit={handleSubmit} >
        <Title>Cadastro de Visita</Title>
        <ReactDate name='data' type='email' placeholder="Data formato YYYY-MM-DD" />
        <Rsinput name='vagas' type='text' placeholder="Quantidade de vagas" /*handleInputChange={e => setDate(e)}*//>
        <Button type="submit" form="dados">Cadastrar</Button>
      </Rsform>
    </Container>
  )
}