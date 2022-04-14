import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { fetchMatchList } from '../redux/fetchMatch/fetchMatch';
import minimap from '../assets/Minimap.png'

export default function Matchlist() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchMatchList())
    }, [])

    const list = useSelector((state) => state)

    return (
        <div>
            <h1>Top Dota 2 live Matches</h1>
            <div>
                {list.map((match) => (
                <Link to={`/matchinfo/${match}`} key={match}>
                        <img src={minimap} alt="dota 2's minimap" />
                    <h5>Match id:<strong>{match}</strong></h5>
                </Link>
                ))}
            </div>
        </div>
    )
}



// @import url('https://fonts.googleapis.com/css2?family=Lato');

// * {
//     box-sizing: border-box;
//     margin: 0;
//     padding: 0;
//   }
  
//   :root {
//     --pink: #ec4c8a;
//     --dark-pink: #df4782;
//     --lato: 'Lato', sans-serif;
//   }
  