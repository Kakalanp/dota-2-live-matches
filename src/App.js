import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Matchlist from './components/MatchList';
import MatchInfo from './components/MatchInfo';

import './styles/App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dota-2-live-matches/" element={<Matchlist />} />
        <Route path="/dota-2-live-matches/matchinfo/:matchid" element={<MatchInfo />} />
      </Routes>
    </BrowserRouter>
  );
}
