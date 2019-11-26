import React, { useState } from 'react';
import StudentRegister from '../screen/StudentRegister'
import api from '../services/api'

// import { Container } from './styles';

export default function RegisterUserContainer() {
  
    const [user, setUser] = useState({})
  

    async function registerUser(user) {
        user.matricula = 111111
        delete user.file
        setUser(user)

        try {
            const { data } = await api.post('/aluno', user)

            console.log(data)

        } catch(error) {
            console.log(error)
        }

    }


    return (
        <StudentRegister user={user} registerUser={(e) => registerUser(e)} />
    );
}
