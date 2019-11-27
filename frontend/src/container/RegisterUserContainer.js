import React, { useState } from 'react';
import StudentRegister from '../screen/StudentRegister'
import api from '../services/api'
import Preloader from '../components/Preloader'
import history from '../services/history'

export default function RegisterUserContainer() {
  
    const [user, setUser] = useState({})
    const [isLoading, setIsloading] = useState(false)

    async function registerUser(user) {
        user.matricula = 111111
        delete user.file
        setUser(user)
        setIsloading(true)
        try {   
            const { data } = await api.post('/aluno', user)
            setIsloading(false)
            history.push(`/list/${data.email}`)
            
        } catch(error) {
            console.log(error)
            setIsloading(false)
        }

    }


    return (
        <>
            { isLoading && <Preloader />}
            <StudentRegister user={user} registerUser={(e) => registerUser(e)} />
        </>
    );
}
