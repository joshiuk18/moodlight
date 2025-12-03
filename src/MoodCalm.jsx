import { useEffect, useState } from 'react';
import './App.css';

function MoodCalm() {

    let [message, setMessage] = useState("");

    useEffect(() => {
        setMessage("take a deep breath");
        document.body.style.backgroundColor = "blue";
    }, []);

    return (
        <div>
            <h2>{message}</h2>
        </div>

    )
}

export default MoodCalm;