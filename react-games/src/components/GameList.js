import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Game from './Game';

const GameList = () => {

    const [gameList, setGameList] = useState([])

    useEffect(() => {
        async function fetchGameList (){
            const response = await axios.get('https://apis.wilders.dev/wild-games/games')
            setGameList(response.data)
        }

        fetchGameList()
    }, [])

    return (
        <div>
            {gameList.map((element, index) => {
                return(
                    <Game key={index} game={element}/>
                )
            })}
        </div>
    );
};

export default GameList;