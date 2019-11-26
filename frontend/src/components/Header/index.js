import React from 'react';

import { Link } from 'react-router-dom'

import { 
    Container,
    MenuItems,
    Logo,
} from './styles'

export default function Header({
    isLogedIn = false
}) {
  return (
     <Container>
         <MenuItems>
            <Logo />
            { isLogedIn && (
                <p>items</p>
            )}


            {!isLogedIn && (
                <Link to="/login">Login</Link>
            )}

         </MenuItems>
     </Container>
  );
}
