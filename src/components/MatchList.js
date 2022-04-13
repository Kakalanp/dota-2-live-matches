import { Link } from 'react-router-dom';

export default function Matchlist() {
    return (
        <div>
            <h1>Top Dota 2 live Matches</h1>
            <div>
                <div>
                    <Link to="matchinfo">Match id:<strong>6522448049</strong></Link>
                </div>
            </div>
        </div>
    )
}