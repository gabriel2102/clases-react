import React, { useEffect, useState } from 'react'
import { simpleGet } from '../actions/SimpleGet';
import EpisodioCard from '../components/EpisodioCard';

const Episodios = () => {
    const [episodios, setEpisodios] = useState([]);
    const loadAPIEpisodies = async() =>{
        const response = await simpleGet('https://rickandmortyapi.com/api/episode');
        setEpisodios(response.results);
    }
    useEffect(() => {
      loadAPIEpisodies();
    }, [])
    
  return (
    <div>
        <ul className='episodios'>
            {
                episodios && episodios.map((episodio, i)=>{
                    return (
                        <li key={i}><EpisodioCard name={episodio.name} date={episodio.air_date}></EpisodioCard>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default Episodios