import React, { useState, useEffect} from "react";
import UserValidations from "../utils/userValidations";
import styles from './CreateAccount.module.scss'

const CreateAccount = () =>{
    const [user, setUser] = useState({
        userName: ['',''],
        rut: ['',''],
        password: ['',''],
        confirmPassword: ['',''],
        email: ['',''],
    })
    const [err, setErr] = useState('');

    const userValidations = new UserValidations();
    const handlerForm = (target) => {
        setUser({...user, [target.name]:[target.value, ...user[target.name[1]]]});
    }

    useEffect(()=>{
    },[user]);
    const createAccount = (e) => {
        e.preventDefault();
        const isValid = userValidations.validateName(user.userName[0]);
        const isRutValid = userValidations.validateRut(user.rut);
        const isEmailValid = userValidations.validateEmail(user.email);
        const isCPassValid = userValidations.valideMatchPass(user.password, user.confirmPassword);
        !isValid.status ? setErr(isValid.err) : setErr('');
        !isRutValid.status ? setErr(isRutValid.err) : setErr('');
        !isEmailValid.status ? setErr(isEmailValid.err) : setErr('');
        !isCPassValid.status ? setErr(isCPassValid.err): setErr('');
        
    }
    return (
        <div>
            <h1>Crea tu cuenta</h1>
            <div className={styles.formContainer}>
                <form action="" onSubmit={createAccount}>
                    <label htmlFor="userName">Nombre:</label>
                    <input type="text" name="userName" value={user.userName[0]} onChange={(e) => handlerForm(e.target)} />
                    <p className={styles.errMsg}>{user.userName[1]}</p>
                    <label htmlFor="rut">Rut:</label>
                    <input type="text" name="rut" value={user.rut} onChange={(e) => handlerForm(e.target)} />
                    <label htmlFor="password">Password:</label>
                    <input type="text" name="password" value={user.password} onChange={(e) => handlerForm(e.target)} />
                    <label htmlFor="confirmPassword">Confirma tu contraseña:</label>
                    <input type="text" name="confirmPassword" value={user.confirmPassword} onChange={(e) => handlerForm(e.target)}/>
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" value={user.email} onChange={(e) => handlerForm(e.target)} />
                    <button type="submit">Crear cuenta</button>
                </form>
                <h3 className={styles.errMsg}>{err}</h3>
            </div>
        </div>
    )
}

export default CreateAccount;