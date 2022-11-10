import { useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Application from './components/app/Application';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';

function App() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  return (
    <Routes>
      {!isLoggedIn && (
        <>
          <Route path='/' element={<HomePage />} />
          <Route path='/auth' element={<AuthPage />} />
        </>
      )}
      {isLoggedIn && <Route path='/app/*' element={<Application />} />}
    </Routes>
  );
}

export default App;
