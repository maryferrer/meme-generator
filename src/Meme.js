import React from 'react';
import memeObjects from './memesData';

function Meme() {
    const [memeImage, setMemeImage] = React.useState("")

    function getMemeImage() {
       const memesArray = memeObjects.data.memes
       const randomNumber = Math.floor(Math.random() * memesArray.length)
     function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <div className="form">
                <input className="form--input" type="text" placeholder="top text"></input>
                <input className="form--input" type="text" placeholder="bottom text"></input>
                <button className="form--button" onClick={getMemeImage}>Get a new meme image</button>
            </div>
            <img src={memeImage} alt="meme" className="meme--image" />
        </main>
    )
}

export default Meme;