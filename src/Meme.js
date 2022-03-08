import React from 'react';
import memeObjects from './memesData';

function Meme() {
    const [memeImage, setMemeImage] = React.useState("")

    function getMemeImage() {
       const memesArray = memeObjects.data.memes
       const randomNumber = Math.floor(Math.random() * memesArray.length)
       setMemeImage(memesArray[randomNumber].url)
    }

    return (
        <main>
            <div className="form">
                <input 
                    name="topText"
                    onChange={handleChange}
                    value={meme.topText}
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" alt="meme"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
            <img src={memeImage} alt="meme" className="meme--image" />
        </main>
    )
}

export default Meme;