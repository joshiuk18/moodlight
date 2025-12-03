import { useEffect, useState } from 'react';
import './App.css';

function MoodHappy() {

    let [happy, setHappy] = useState([{ isHappy: false }]);
    let [message, setMessage] = useState("");
    let [color, setColor] = useState(null);

    let moodHappy = () => {
        setHappy(() => {
            return {
                isHappy: true
            }
        });
        setMessage("you are glowing today");
    }

    useEffect(function printHappy() {
        setColor(document.body.style.backgroundColor = color);
    }, [color]);

    return (
        <div>
            <h2>{message}</h2>
            <button onClick={() => { moodHappy(message), setColor("yellow") }}>Happy</button>
        </div >

    )
}

export default MoodHappy;