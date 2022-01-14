import './App.css';
import { AuthPage } from './pages/auth/auth.page'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<AuthPage />}/>
      </Routes>
    </div>
  );
}

export default App;
