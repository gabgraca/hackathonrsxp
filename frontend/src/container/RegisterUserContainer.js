import React, { useState } from 'react';
import StudentRegister from '../screen/StudentRegister'
// import { Container } from './styles';

export default function RegisterUserContainer() {
  
    const [user, setUser] = useState({})
  

    function registerUser(data) {
        data.matricula = 111111
        delete data.file
        setUser(data)
    }


    return (
        <StudentRegister user={user} registerUser={(e) => registerUser(e)} />
    );
}
