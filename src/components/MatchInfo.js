import { useParams } from 'react-router-dom';

export default function MatchInfo() {
    const { matchid } = useParams();
    console.log(matchid);
    return (
        <div>
            <div>
                <h1>Dire Victory</h1>
            </div>
            <div>
                <h1>Match breakdown</h1>
                <div>
                    <div><p>ALL PICK</p></div>
                    <div><p>58</p><p>VS</p><p>41</p></div>
                    <div><p>Duration:</p><p>39:09</p></div>
                    <div><p>Date and time:</p><p>04/06/2022, 01:13PM</p></div>
                    <div><p>Match ID:</p><p>6512361923</p></div>
                    <div><p>DOWNLOAD REPLAY</p></div>
                </div>
            </div>        
        </div>
    )
}