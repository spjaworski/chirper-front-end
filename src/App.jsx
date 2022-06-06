import React, { useState, useEffect } from 'react';
import Form from './componets/Form';
import ChirpList from './componets/List';



const App = () => {

    const [chirps, setChirps] = useState([
    {
        id: 'chirp1',
        username: 'Miles',
        chirp: `@peterBparker That's too many things!`
    },
    {
        id: 'chirp2',
        username: 'peterBparker',
        chirp: `@Miles Then stop listening to me!`
    },
    {
        id: 'chirp3',
        username: 'Miles',
        chirp: `@peterBparker That's the best idea you've had all day!`
    }])

    
    return (
       <div>
           <>
               <Form chirps={chirps} setChirps={setChirps}/>
           </>
           <>
               <ChirpList chirps={chirps}/>
           </>
       </div>
    );
};

export default App;