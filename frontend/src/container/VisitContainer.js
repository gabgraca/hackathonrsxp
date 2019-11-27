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
                    history.push(`/list/${aluno.data.email}`)
                 }
     
                 if(company.data !== null) {
                    history.push(`/companyList/${company.data.email}`)
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
