import React from 'react';
import ReactDate from '../../components/ReactDate'

import { 
  Container,
  Rsform,
  Title,
  Rsinput,
  Button,
} from './styles';
import Header from '../../components/Header'

function handleSubmit(data){
  console.log(data);
}
export default function Visit() {

  

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