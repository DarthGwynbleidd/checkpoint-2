import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Game from './Game';

const GameList = () => {

    const [gameList, setGameList] = useState([])
    const [check, setCheck] = useState(false)

    useEffect(() => {
        async function fetchGameList (){
            const response = await axios.get('https://apis.wilders.dev/wild-games/games')
            setGameList(response.data)
            console.log(gameList);
        }

        fetchGameList()
    }, [])

    const handleClick = () => {
        setCheck(prevCheck => prevCheck = !prevCheck)
    }

    return (
        <div>
            <label>Show games rating above 4.5</label>
            <button onClick={handleClick}>{check ? 'ON' : 'OFF'}</button>
            {gameList.filter((game) => !check || game.rating >= 4.5)
            .map((element, index) => {
                return(
                    <Game key={index} game={element}/>
                )
            })}
        </div>
    );
};

export default GameList;