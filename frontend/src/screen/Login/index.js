import React from 'react';

import { 
  Container,
  ContainerForm,
  Img,
  InputItem,
  Button,
} from './styles';

export default function Login({
  loginUser
}) {
  return (
    <Container>
        <ContainerForm onSubmit={(email) => loginUser(email)} >
          <Img />
          <InputItem name='email' />
          <Button>Login</Button>
        </ContainerForm>
    </Container>
  )
}