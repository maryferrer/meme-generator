import React from 'react';
import memeObjects from './memesData';

function Meme() {

const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    
    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        async function getMemes() {
        const res = await fetch("https://api.imgflip.com/get_memes")
        const data = await res.json()
        setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])

    function getMemeImage() {
       const memesArray = memeObjects.data.memes
       const randomNumber = Math.floor(Math.random() * memesArray.length)
       setMemeImage(memesArray[randomNumber].url)
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