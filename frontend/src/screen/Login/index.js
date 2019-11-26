import React, { useState, useEffect } from 'react';

import { 
  Container,
  ContainerForm,
  Img,
  Input,
  Button,
} from './styles';

export default function Login() {
  return (
    <Container>
        <ContainerForm>
          <Img />
          <Input />
          <Button>Login</Button>
        </ContainerForm>
    </Container>
  )
}