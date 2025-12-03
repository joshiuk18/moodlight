import './App.css';
import MoodHappy from './MoodHappy.jsx';
import MoodCalm from './MoodCalm.jsx';
import MoodEnergetic from './MoodEnergetic.jsx';

function MoodLight() {

    return (
        <div className='moodlight'>
            <h1>MoodLight</h1>
            <MoodHappy />
            <MoodCalm />
            <MoodEnergetic />
        </div >
    );
}

export default MoodLight;