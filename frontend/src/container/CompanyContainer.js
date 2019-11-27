import React, {useState, useEffect } from 'react';
import api from '../services/api'
import CompanyList from '../screen/CompanyList'
import { useParams } from 'react-router-dom'
import history from '../services/history'

// import { Container } from './styles';

export default function CompanyContainer() {
  
    const [{ email }] = useState(useParams())
    const [ company, setCompany ] = useState({})
    const [ opportunities, setOpportunities ] = useState({})
    useEffect(() => {

        async function getCompanyData() {
            try {

                const company = await api.get(`/empresa/${email}`, email)
                const opportunities = await api.get(`/oportunidades`)
                setCompany(company.dataa)
                setOpportunities(opportunities.data)
                console.log(opportunities.data)
             
                 //TODO when user not found
                 //history.push('/')
     
             } catch(error) {
                 console.log(error)
             }
        }

        if(email !== null && email !== undefined) {
            getCompanyData()
        }

    }, [email])
  
    return (
        <>
            <CompanyList 
                company={company}
                opportunities={opportunities} 
            />
        </>
    )
}
