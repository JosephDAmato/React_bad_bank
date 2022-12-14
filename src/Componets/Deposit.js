import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";
import Card from "./UI/Card";

const Deposit = ({ users }) => {
  const [balance, setBalance] = useState('100');
  const [balanceInput, setBalanceInput] = useState('');

  const depositHandleChange = (e) => {
    setBalanceInput(e.target.value);
  };

  const submitHandler = (e) => {
    console.log(users)
    e.preventDefault();
    setBalance((preState) => {
      return setBalance(+balance + +balanceInput);
    });
  };

  return (
    <Card>
      <div className="container">
        <div>Balance: ${balance} </div>
        <form onSubmit={submitHandler}>
          <input
            value={balanceInput}
            type="number"
            min="0.01"
            step="0.01"
            onChange={depositHandleChange}
          />
          <br />
          <Button type="submit">Deposit Amount</Button>
        </form>
      </div>
    </Card>
  );
};

export default Deposit;
