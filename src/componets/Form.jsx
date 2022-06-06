import React, { useState } from 'react';
import ChirpList from './List';

const Form = props => {
    const [ username, setUsername ] = useState('');
    const handleUsernameChange = e => {
        setUsername(e.target.value);
    }
    const [ chirp, setChirp ] = useState('');
    const handleChirpChange = e => {
        setChirp(e.target.value);
    }

    const handleSubmit = () => {
        
        if (username == '' || chirp == '') {
            alert("Please enter both a username and a message")
        } else {
            
           const newChirp = {
                    id: 'chirp4',
                    username: username,
                    chirp: chirp
            }
            
            props.setChirps([...props.chirps, newChirp]);
                
                console.log(newChirp);
        }
        };
    
    
    return (
        <div>
        <form>
            <label>
                Username: 
            </label>
            <input value={username} onChange={e =>setUsername(e.target.value)} />
        </form>
        <form>
            <label>
                Chirp:
            </label>
            <input value={chirp} onChange={e =>setChirp(e.target.value)} />
        </form>
        <button onClick={handleSubmit} type="submit" value="submit">Chirp it!</button>
        </div>
        );
}

export default Form;