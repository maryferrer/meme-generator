import React from 'react';

function Meme() {
    return (
        <div className="form">
            <input className="form--input" type="text" placeholder="top text"></input>
            <input className="form--input" type="text" placeholder="bottom text"></input>
            <button className="form--button" onClick>Get a new meme image</button>
        </div>
    )
}

export default Meme;

