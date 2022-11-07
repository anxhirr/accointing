import { Routes, Route } from 'react-router-dom';
import './App.css';
import Application from './components/app/Application';
import Auth from './components/auth/Auth';
import Home from './components/home/Home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/auth' element={<Auth />} />
      <Route path='/app/*' element={<Application />} />
    </Routes>
  );
}

export default App;
