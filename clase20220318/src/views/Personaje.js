import React, {useEffect, useState} from 'react'
import {BrowserRouter as Router, Switch, Route, Link, useParams, useHistory } from 'react-router-dom';
import { simpleGet } from '../actions/SimpleGet';


const Personaje = () => {
    let {id} = useParams();
    let history = useHistory();
    const [personaje, setPersonaje] = useState();
    /* const loadApiCharacter = async(id) => {
        const response = await simpleGet('https://rickandmortyapi.com/api/character/'+id);
        setPersonaje(response);    
    } */
    useEffect(() => {
        //loadApiCharacter(id);
        console.log(id);
    }, [id])

    const backCharacters = () =>{
        history.push('/rickandmorty/characters');
    }
    /* if(personaje===undefined){
        return (
            <div className='page-personaje'>
                
                <h1>CARGANDO...</h1>
                
            </div>
        );
    }else{ */ 
        return (
            <div className='page-personaje'>
                {/* <img src={personaje.image}></img>
                <div className='personaje-content'>
                    <h1>{personaje.name}</h1>
                    <h3>Especie: {personaje.species}</h3>
                    <h3>Estado: {personaje.status}</h3>
                    <h3>Origen: {personaje.origin.name}</h3>
                    <h3>Locación: {personaje.location.name}</h3>
                    <button onClick={backCharacters}>Volver a personajes</button>
                </div> */}
                HOLA
            </div>
        )
    //}
}

export default Personaje