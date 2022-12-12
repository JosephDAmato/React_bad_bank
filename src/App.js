import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router, Route, Routes,
  Switch,
  Link
} from "react-router-dom";

import Nav from './Componets/NavMenu';
import Home from './Componets/Home';
import Login from './Componets/Login';
import CreateAccount from './Componets/CreateAccount';
import Deposit from './Componets/Deposit';
import Withdraw from './Componets/Withdraw';
import AllData from './Componets/AllData';
import NewAccounts from './Componets/NewAccounts';

function App() {
  const [users, setUsers] = useState([])

  const saveUserData = (userData) => {
    setUsers((prevState) => {
      return [userData, ...prevState]
    })
    console.log(`In app.js: ${JSON.stringify(users)}`)
  }
  
  return (
    <div className="App">
      <h1>React Bad Bank</h1>
      <Router>
      <Nav />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Login" element={<Login users={users}/>}/>
          <Route path="/CreateAccount" element={<NewAccounts onAddUser={saveUserData}/>}/>
          <Route path="/Deposit" element={<Deposit users={users}/>}/>
          <Route path="/Withdraw" element={<Withdraw users={users}/>}/>
          <Route path="/AllData" element={<AllData users={users}/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
