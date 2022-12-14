import React from "react";
import { Button, Card } from "react-bootstrap";

const Login = () => {
  return (
    <div className="container">
      <Card>
        <form><br />
          Email:
          <input type="email"/>
          <br /><br />
          Password:
          <input type="password"/>
          <br /><br />
          <Button>Login</Button>
          <br />
          <br />
          <Button>Create Account</Button>
          <br />
        </form>
      </Card>
    </div>
  );
};

export default Login;
