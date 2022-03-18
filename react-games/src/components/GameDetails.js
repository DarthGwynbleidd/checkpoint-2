import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

const GameDetails = () => {

    const {id} = useParams()
    const [game, setGame] = useState({})

    useEffect(() => {
        async function fetchGame(){
            const response = await axios.get(`https://apis.wilders.dev/wild-games/games/${id}`)
            setGame(response.data)
            
        }

        fetchGame()
        console.log(game);
    }, [])
    return (
        <div>
            <NavLink to='/'><button>Home</button></NavLink>
            <h3>{game.name}</h3>
            <p>Release date : {game.released}</p>
            <p>Genres: {game.genres !== undefined && game.genres.map((genre, index) => {
                return(
                    <span key={index}>{genre.name} </span>
                )
            })}</p>
            <video controls>
                {game.clip !== undefined && <source src={game.clip.clip} type="video/mp4"/>}
            </video>
        </div>
    );
};

export default GameDetails;