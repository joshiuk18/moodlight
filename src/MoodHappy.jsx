import { useEffect, useState } from 'react';
import './App.css';

function MoodHappy() {

    let [happy, setHappy] = useState([{ isHappy: false }]);
    let [message, setMessage] = useState("");
    let [color, setColor] = useState(null);

    const moodHappy = () => {
        setHappy({ isHappy: true });
        setMessage("You are glowing today");
        setColor("yellow");
    };

    useEffect(() => {
        if (color) {
            document.body.style.backgroundColor = color;
        }
    }, [color]);

    return (
        <div>
            <h2>{message}</h2>
            <button onClick={moodHappy}>Happy</button>
        </div >

    )
}

export default MoodHappy;