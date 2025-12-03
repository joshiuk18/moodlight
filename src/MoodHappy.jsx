import { useEffect, useState } from 'react';
import './App.css';

function MoodHappy() {

    let [message, setMessage] = useState("");

    useEffect(() => {
        setMessage("You are glowing today");
        document.body.style.backgroundColor = "yellow";
    }, []);

    return (
        <div>
            <h2>{message}</h2>
        </div >

    )
}

export default MoodHappy;