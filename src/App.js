import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Matchlist from './components/MatchList';
import MatchInfo from './components/MatchInfo';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Matchlist />} />
    <Route path="/matchinfo/:matchid" element={<MatchInfo />} />
    </Routes>
    </BrowserRouter>
  )
}
