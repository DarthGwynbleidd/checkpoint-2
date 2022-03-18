import React from 'react';
import { NavLink } from 'react-router-dom';

const Game = (props) => {
    return (
        <div>
            <NavLink to={`/games/${props.game.id}`}>{props.game.name}</NavLink>
        </div>
    );
};

export default Game;