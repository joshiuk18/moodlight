import { useEffect, useState } from 'react';
import './App.css';

function MoodEnergetic() {

    let [energetic, setEnergetic] = useState([{ isEnergetic: false }]);
    let [message, setMessage] = useState("");
    let [color, setColor] = useState(null);

    const moodEnergetic = () => {
        setEnergetic({ isEnergetic: true });
        setMessage("let's go!");
        setColor("orange");
    };

    useEffect(() => {
        if (color) {
            document.body.style.backgroundColor = color;
        }
    }, [color]);

    return (
        <div>
            <h2>{message}</h2>
            <button onClick={moodEnergetic}>Energetic</button>
        </div >

    )
}

export default MoodEnergetic;