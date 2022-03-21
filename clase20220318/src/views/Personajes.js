import React, { useState, useEffect } from 'react'
import { simpleGet } from '../actions/SimpleGet';
import PersonajeCard from '../components/PersonajeCard';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Personaje from './Personaje';

const Personajes = () => {
    const [personajes, setPersonajes] = useState([]);
    const [numPage, setNumPage] = useState(1);
    const [totalPages, setTotalPages] = useState();
    const [elegido, setElegido] = useState();
    const loadApiCharacters = async(numPage) => {
      const response = await simpleGet('https://rickandmortyapi.com/api/character?page='+numPage);
      setPersonajes(response.results);
      setTotalPages(response.info.count);  
    }
    useEffect(() => {
     
      loadApiCharacters();
    }, [])

    const onChangePage = (e) => {
        setNumPage(e.target.value);
    }
    const onSubmitPage = (e) =>{
      e.preventDefault();
      loadApiCharacters(numPage);
    }
    const changePage = (e) =>{
      let page = numPage;
      e.target.name==='previous'?page--:page++;
      setNumPage(page);
      loadApiCharacters(numPage);
    }
    const changeSelect = (e) => {
      setElegido(e.target.value);
      console.log(e.target.value);
    }
    useEffect(() => {
      console.log(personajes.filter(personaje => personaje.id==elegido));
      console.log(personajes.map((personaje) => typeof(personaje.id)));
      console.log(typeof(elegido));
    }, [elegido])
    
   
  return (
    <div className='cards'>
        <form onSubmit={onSubmitPage}>
            <input type='number' onChange={onChangePage} min='1'></input>
            <button type='submit'>Ir</button>
        </form>
        <select onChange={changeSelect}>
          {
            personajes&&personajes.map((personaje, i)=>{
              return (
                <option key={i} value={personaje.id}>{personaje.name}</option>
              )
            })
          }
        </select>
        <div>
          {
            personajes&&personajes.filter(personaje => parseInt(personaje.id)===parseInt(elegido)).map((personaje,index)=>{
              return (
                <PersonajeCard name={personaje.name} src={personaje.image} specie={personaje.species} location={personaje.location.name} origin={personaje.origin.name}> </PersonajeCard>
              )
            })
          }
        </div>
        <ul>
          {
              
              numPage>1?<li><button type='link' name='previous' onClick={changePage}>Prev</button></li>:''
          }
          <li>
            {
              numPage<totalPages?<button type='link' name='next' onClick={changePage}>Next</button>:''

            }
          </li>
        </ul>
        <Router>
          <ul className='cards-list'>
              {
                personajes && personajes.map((personaje, i)=>{
                  return (<li key={i}>
                    {
                      <Link to={`/rickandmorty/character/${personaje.id}`}>
                        
                        <PersonajeCard name={personaje.name} src={personaje.image} specie={personaje.species} location={personaje.location.name} origin={personaje.origin.name}> </PersonajeCard>
                      </Link>
                    }
                  </li>)
                })
              }
          </ul>
          <Switch>
              <Route path='/rickandmorty/character/:id'>
                <Personaje></Personaje> 
              </Route>
          </Switch>
        </Router>
    </div>
  )
}

export default Personajes