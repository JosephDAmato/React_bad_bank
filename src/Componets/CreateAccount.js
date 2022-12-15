import React, { useState } from "react";
import Card from "./UI/Card";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const CreateAccount = (props) => {
  const [status, setStatus] = useState(true)
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  function validation(field, label){
    if(!field) {
        setStatus(`Error: ${label}`);
        setTimeout(() => setStatus(''), 3000);
        return false;
    }
    return true;
  }

  const resetClickHandler = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validation(name, "name")) return; 
    if (!validation(email, "email")) return;
    if (!validation(password, "password")) return;
    
    const user = {
        name: name,
        email: email,
        password: password,
        balance: 100,
    };
    resetClickHandler();
    console.log(`In CreateAccount.js: ${JSON.stringify(user)}`);
    props.onSaveUserValue(user);
    setStatus(false);
    console.log(status)
  };

  const newAccountHandler= () =>{
    setStatus(true);
  }
  const accountForm =  <> <div className="container">
  <Card>
    <h4>Start Banking Today</h4>
    <form onSubmit={handleSubmit}>
      <br />
      Name
      <br />
      <input
        type="text"
        placeholder="Name"
        onChange={handleNameChange}
        value={name}
      />
      <br />
      Email
      <br />
      <input
        type="email"
        placeholder="Email@Provider.com"
        onChange={handleEmailChange}
        value={email}
      />
      <br />
      Password
      <br />
      <input
        type="text"
        placeholder="Password"
        onChange={handlePasswordChange}
        value={password}
      />
      <br />
      <Button type="submit">Submit</Button>
      <br / >
      <Button onClick={resetClickHandler}>Reset</Button>
    </form>
  </Card>
</div>
</>
  const afterSubmission = <>
  <div className="container">
    <Card>
      <h5>Success! Account Created!</h5>
      <Button as={Link} to="/Login">Go Login</Button>
      <br />
      <Button onClick={newAccountHandler}>Create Another Account</Button>
    </Card>
  </div>
  </>

  return (
    <>
    {(status ? accountForm : afterSubmission)}</>
   
  );
};

export default CreateAccount;
