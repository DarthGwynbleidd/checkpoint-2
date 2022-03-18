import {Routes, Route} from 'react-router-dom'
import './App.css';
import GameDetails from './components/GameDetails';
import GameList from './components/GameList';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header name={"React-games"}/>
      <Routes>
        <Route path="/" element={<GameList />}/>
        <Route path="/games/:id" element={<GameDetails />}/>      
      </Routes>
    </div>
  );
}

export default App;
