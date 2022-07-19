import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import LoginPage from './Pages/LoginPages/LoginPages';
import { useSelector } from "react-redux"
import LandinPage from './Pages/LandingPage/LandingPage';
import { PlayPage } from './Pages/PlayPage/PlayPage';
import { OnPlay, OnPlayPage } from './Pages/PlayPage/OnPlayPage';

function App() {
  const isLogin = useSelector((state)=>state.status.isLogin)
  const isPlay = useSelector((state)=>state.player.isPlay)

  return (
    <Routes>
      
      <Route path='/' element={isLogin ?  <Navigate to="/landingpage" replace /> : <LoginPage/>} />

      <Route path='/landingpage' element={isLogin ? <LandinPage/> : <Navigate to="/" replace />} />
      <Route path='/landingpage/setting' element={isLogin ? isPlay ? <PlayPage/> : <Navigate to="/landingpage" replace /> : <Navigate to="/" replace />} />
      <Route path='/landingpage/play' element={isLogin ? isPlay ? <OnPlayPage/> : <Navigate to="/landingpage" replace /> : <Navigate to="/" replace />} />

    </Routes>
  );
}

export default App;
