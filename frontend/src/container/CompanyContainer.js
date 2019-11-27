import React, { useState, useEffect } from "react";
import api from "../services/api";
import CompanyList from "../screen/CompanyList";
import { useParams } from "react-router-dom";

export default function CompanyContainer() {
  const [{ email }] = useState(useParams());
  const [company, setCompany] = useState({});
  const [opportunities, setOpportunities] = useState([]);
  useEffect(() => {
    async function getCompanyData() {
      try {
        const company = await api.get(`/empresa/${email}`, email);
        setCompany(company.dataa);

        const { _id } = company.data;

        const opportunities = await api.get(`/oportunidades/${_id}`);

        setOpportunities(opportunities.data);
      } catch (error) {
        console.log(error);
      }
    }

    if (email !== null && email !== undefined) {
      getCompanyData();
    }
  }, [email]);

  return (
    <>
      <CompanyList company={company} opportunities={opportunities} />
    </>
  );
}
