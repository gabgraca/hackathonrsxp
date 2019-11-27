import React from 'react';
import Login from '../screen/Login';
import history from '../services/history'

export default function LoginContainer() {
    
    async function loginUser({ email }) {
        history.push(`/visitContainer/${email}`)


    }
  
    return (
        <>
            <Login loginUser={(email) => loginUser(email)} />
        </>
    );
}
