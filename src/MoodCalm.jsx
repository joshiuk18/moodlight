import { useEffect, useState } from 'react';
import './App.css';

function MoodCalm() {

    let [calm, setCalm] = useState([{ isCalm: false }]);
    let [message, setMessage] = useState("");
    let [color, setColor] = useState(null);

    let moodCalm = () => {
        setCalm(() => {
            return {
                isCalm: true
            }
        });
        setMessage("take a deep breadth");
    }

    useEffect(function printCalm() {
        setColor(document.body.style.backgroundColor = color);
    }, [color]);

    return (
        <div>
            <h2>{message}</h2>
            <button onClick={() => { moodCalm(message), setColor("blue") }}>Calm</button>
        </div>

    )
}

export default MoodCalm;