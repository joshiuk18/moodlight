import { useEffect, useState } from 'react';
import './App.css';

function MoodEnergetic() {

    let [message, setMessage] = useState("");

    useEffect(() => {
        setMessage("let's go!");
        document.body.style.backgroundColor = "orange";
    }, []);

    return (
        <div>
            <h2>{message}</h2>
        </div >

    )
}

export default MoodEnergetic;