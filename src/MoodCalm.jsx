import { useEffect, useState } from 'react';
import './App.css';

function MoodCalm() {

    let [message, setMessage] = useState("");

    useEffect(() => {
        setMessage("take a deep breath");
        document.body.style.backgroundColor = "blue";

        setTimeout(() => {
            setMessage("");
            document.body.style.backgroundColor = "white";
        }, 5000);
    }, []);

    return (
        <div>
            <h2>{message}</h2>
        </div>

    )
}

export default MoodCalm;