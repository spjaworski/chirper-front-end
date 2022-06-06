import React from 'react';

const ChirpList = props => {
    // const chirps = [
    //     {
    //         id: 'chirp1',
    //         username: 'Miles',
    //         chirp: `@peterBparker That's too many things!`
    //     },
    //     {
    //         id: 'chirp2',
    //         username: 'peterBparker',
    //         chirp: `@Miles Then stop listening to me!`
    //     },
    //     {
    //         id: 'chirp3',
    //         username: 'Miles',
    //         chirp: `@peterBparker That's the best idea you've had all day!`
    //     }
    // ]
    // const chirpElements = chirps.map(val => {
    //     return <li>{val}</li>;
    // });
    console.log(props.chirps);
    return (
        <>
            <ul>
                {props.chirps.map(val => {
                    return <li key = {val.id}>{val.username}: {val.chirp}</li>
                })}
            </ul>
        </>
    )
}

export default ChirpList;