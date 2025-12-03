import { useEffect, useState } from 'react';
import './App.css';

function MoodEnergetic() {

    let [energetic, setEnergetic] = useState([{ isEnergetic: false }]);
    let [message, setMessage] = useState("");
    let [color, setColor] = useState(null);

    let moodEnergetic = () => {
        setEnergetic(() => {
            return {
                isEnergetic: true
            }
        });
        setMessage("let's go!");
    }

    useEffect(function printEnergetic() {
        setColor(document.body.style.backgroundColor = color);
    }, [color]);

    return (
        <div>
            <h2>{message}</h2>
            <button onClick={() => { moodEnergetic(message), setColor("orange") }}>Energetic</button>
        </div>

    )
}

export default MoodEnergetic;