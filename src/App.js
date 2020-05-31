import React, { useState } from 'react';
import './App.css';
import Menu from './components/layouts/Menu';
import HistoricalData from './components/reports/HistoricalData';
import Login from './components/login/Login';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  if (!loggedIn) {
    return <Login setLoggedIn={setLoggedIn} setUser={setUser} />;
  }
  if (user != null) {
    return (
      <div>
        <Menu page={HistoricalData} user={user} />
      </div>
    );
  }
  return 'loading';
}

export default App;
