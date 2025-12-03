import './App.css';
import MoodHappy from './MoodHappy.jsx';
import MoodCalm from './MoodCalm.jsx';
import MoodEnergetic from './MoodEnergetic.jsx';
import { useState } from 'react';

function MoodLight() {

    let [mood, setMood] = useState(null);

    return (
        <div className='moodlight'>
            <h1>MoodLight</h1>

            <button onClick={() => setMood("happy")}>Happy</button>
            <button onClick={() => setMood("calm")}>Calm</button>
            <button onClick={() => setMood("energetic")}>Energetic</button>

            {mood === "happy" && <MoodHappy />}
            {mood === "calm" && <MoodCalm />}
            {mood === "energetic" && <MoodEnergetic />}
        </div >
    );
}

export default MoodLight;