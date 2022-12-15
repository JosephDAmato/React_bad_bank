import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Card from "./UI/Card";

const Login = () => {
  const [userName, setUserName] = useState('');
  const [login, setLogin] = useState(true);
  const loginHandler = () => {
    setLogin(false);
  }

  const userNameChangeHandler = (e) =>{
    e.preventDefualt();
    setUserName(e.target.value)
  }

  const loggedIn = <>
  <div className="container">
    <Card>
    <h4>
    Welcome {userName}</h4>
    <br/>
    <Button onClick={()=>setLogin(true)}>Log Out</Button></Card></div></>
  

  const loggedOut = <div className="container">
  <Card>
    <form><br />
      Email:
      <input type="email"/>
      <br /><br />
      Password:
      <input type="password"/>
      <br /><br />
      <Button onClick={loginHandler} value={userName} onChange={userNameChangeHandler}>Login</Button>
      <br />
      <br />
      <Button as={Link} to="/CreateAccount">Go Create A New Account</Button>
      <br />
    </form>
  </Card>
</div>

  return (
    <>{(login ? loggedOut : loggedIn)}</>
  );
};

export default Login;
