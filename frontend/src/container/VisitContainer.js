import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import history from '../services/history'

import api from '../services/api'

export default function VisitCotainer() {
  
    const [{ email }] = useState(useParams())

    useEffect(() => {

        async function checkUserType() {
            try {

                const aluno = await api.get(`/aluno/${email}`, email)
                const company = await api.get(`/empresa/${email}`, email)
     
                 if(aluno.data !== null) {
                     console.log('é aluno')
                 }
     
                 if(company.data !== null) {
                     console.log('é empresa')
                 }

                 //TODO when user not found
                 //history.push('/')
     
             } catch(error) {
                 console.log(error)
             }
        }

        if(email !== null && email !== undefined) {
           checkUserType()
        }

    }, [email])



    return (
        <>
            {console.log(email)}
        </>
    );
}
