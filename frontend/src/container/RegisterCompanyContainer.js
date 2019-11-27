import React, { useState } from 'react';
import CompanyRegister from '../screen/CompanyRegister'
import api from '../services/api'
import Preloader from '../components/Preloader'
import history from '../services/history'

export default function RegisterCompanyContainer() {
  
    const [company, setCompany] = useState({})
    const [isLoading, setIsloading] = useState(false)

    async function registerCompany(company) {
        
        setCompany(company)
        setIsloading(true)
        try {   
            const { data } = await api.post('/empresa', company)
            setIsloading(false)
            history.push(`/visitContainer/${data.email}`)
            
        } catch(error) {
            console.log(error)
            setIsloading(false)
        }

    }


    return (
        <>
            { isLoading && <Preloader />}
            <CompanyRegister registerCompany={(e) => registerCompany(e)} company={company} />
        </>
    );
}
