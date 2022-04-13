import { Link } from 'react-router-dom';

export default function Matchlist() {
    return (
        <div>
            <h1>Top Dota 2 live Matches</h1>
            <div>
                <Link to="matchinfo">
                    <h5>Match id:<strong>6522448049</strong></h5>
                </Link>
            </div>
        </div>
    )
}