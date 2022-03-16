import React from 'react'
import { RegisterForm } from '../components/RegisterForm'

export const Register = () => {
  const registerUser=(user)=>{
      console.log(user);
  }
    return (
    <div>
        <h1>Página de registro de usuario</h1>
        <RegisterForm onSubmitProp={registerUser} firstN="" lastN="" email="" rut="" password="" confirmPassword=""/>
    </div>
  )
}
