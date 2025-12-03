import { useEffect, useState } from 'react';
import './App.css';

function MoodCalm() {

    let [calm, setCalm] = useState([{ isCalm: false }]);
    let [message, setMessage] = useState("");
    let [color, setColor] = useState(null);

    const moodCalm = () => {
        setCalm({ isCalm: true });
        setMessage("let's go!");
        setColor("blue");
    };

    useEffect(() => {
        if (color) {
            document.body.style.backgroundColor = color;
        }
    }, [color]);

    return (
        <div>
            <h2>{message}</h2>
            <button onClick={moodCalm}>Calm</button>
        </div>

    )
}

export default MoodCalm;