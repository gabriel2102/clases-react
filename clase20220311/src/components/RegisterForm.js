import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from "yup"

export const RegisterForm = (props) => {
    const {onSubmitProp, firstN, lastN, email, rut, password, confirmPassword} = props;

  return (
    <div>
        <Formik
        initialValues={{
            firstName: firstN,
            lastName: lastN,
            email: email,
            rut: rut,
            password: password,
            confirmPassword: confirmPassword
        }}
        validationSchema={Yup.object().shape({
            firstName: Yup.string()
            .min(4,"Tu nombre es corto")
            .max(15,"Tu nombre es muy largo")
            .required("Ingresa nombre"),
            lastName: Yup.string()
            .min(4,"Tu apellido es corto")
            .max(15,"Tu apellido es muy largo")
            .required("Ingresa apellido"),
            email: Yup.string()
            .email("correo no válido")
            .required("Es obligatorio"),
            rut: Yup.string()
            .matches(/^[0-9]+[-|‐]{1}[0-9kK]{1}$/, "El rut no tiene el formato correcto")
            .required("El rut es obligatorio"),
            password: Yup.string()
            .required("campo obligatorio")
            .equals([Yup.ref('confirmPassword'),null], "Las contraseñas deben ser iguales")
            .min(8, "La contraseña debe tener al menos 8"),
            confirmPassword: Yup.string()
            .required("campo obligatorio")
            .equals([Yup.ref('password'),null], "Las contraseñas deben ser iguales")
            .min(8, "La confirmación de contraseña debe tener al menos 8")
            
        })}
        onSubmit={(values,{setSubmitting})=>{
            const timeOut = setTimeout(()=>{
                console.log(values);
                onSubmitProp(values);
                setSubmitting(false);
            },1000)
        }}
        >
            {({errors, touched, handleSubmit})=>{
                return (<div>
                    <h2> Formulario de registro</h2>
                    <Form onSubmit={handleSubmit}>
                        <label htmlFor='firstName'>Nombre</label>
                        <Field id="firstName" type="text" placeholder="Nombre" name="firstName" className="form-control"></Field>
                        <ErrorMessage name="firstName">{(msg)=><p className='error'>{msg}</p>}</ErrorMessage>

                        <label htmlFor='lastName'>Apellido</label>
                        <Field id="lastName" type="text" placeholder="Apellido" name="lastName" className="form-control"></Field>
                        <ErrorMessage name="lastName">{(msg)=><p className='error'>{msg}</p>}</ErrorMessage>

                        <label htmlFor='email'>Email</label>
                        <Field id="email" type="text" placeholder="email" name="email" className="form-control"></Field>
                        <ErrorMessage name="email">{(msg)=><p className='error'>{msg}</p>}</ErrorMessage>

                        <label htmlFor='rut'>Rut</label>
                        <Field id="rut" type="text" placeholder="rut" name="rut" className="form-control"></Field>
                        <ErrorMessage name="rut">{(msg)=><p className='error'>{msg}</p>}</ErrorMessage>

                        <label htmlFor='password'>Password</label>
                        <Field id="password" type="text" placeholder="password" name="password" className="form-control"></Field>
                        <ErrorMessage name="password">{(msg)=><p className='error'>{msg}</p>}</ErrorMessage>

                        <label htmlFor='confirmPassword'>Confirmar Password</label>
                        <Field id="confirmPassword" type="text" placeholder="confirmPassword" name="confirmPassword" className="form-control"></Field>
                        <ErrorMessage name="confirmPassword">{(msg)=><p className='error'>{msg}</p>}</ErrorMessage>
                        <button type="submit">Registrarse</button>
                    </Form>
                </div>)
            }}
        </Formik>
    </div>
  )
}
