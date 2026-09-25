import { useState } from 'react';

export default function Player({ initialName, symbol }) {
    const [ playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false);

    const editingPlayerName = <input type='text' className="player-name" required value={playerName} onChange={handleChangeName}/>;
    const player = <span className="player-name">{playerName}</span>;

    function handleEditClick() {
        setIsEditing((editing) => !editing); //boa pratica
        //console.log('funciona');
    }

    function handleChangeName(event){
        setPlayerName(event.target.value);
    }

    return (
        <li>
            <span className="player">
                {isEditing ? editingPlayerName : player}
                <span className="player-symbol">{symbol}</span>
            </span>
            
            <button onClick={() => {handleEditClick()}}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}

