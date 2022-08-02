import './App.css';
import { Routes, Route } from "react-router-dom";
import NavBar from './components/NavBar';
import { useState } from 'react';
import SignIn from './Pages/SignIn';
import bootstrap from 'bootstrap';
import { faFontAwesome } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [isAuthLoading, setIsAuthLoading] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <Routes>
        <Route path="/" element={<NavBar
            isAuthLoading={isAuthLoading}
            setIsAuthLoading={setIsAuthLoading}
          />}></Route>
        <Route element={<SignIn/>} components={SignIn} path='/create-user' ></Route>

        </Routes>
      </header>
    </div>
  );
}

export default App;