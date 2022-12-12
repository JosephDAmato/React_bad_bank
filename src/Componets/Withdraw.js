import React, { useState } from "react";

import { Button } from "react-bootstrap";
import Card from "./UI/Card";

const Withdraw = () => {
  const [balance, setBalance] = useState(100)
  const [withdrawBalance, setWithdrawalBalance] = useState();

  const withdrawHandleChange = (e) => {
    setWithdrawalBalance(e.target.value)
  };

  const handleSubmit = () => {
    if(withdrawBalance > balance){
        return alert("Insufficient Funds")
    }else{
         setBalance((prevState) => {
            return prevState - withdrawBalance
        })
    }
  }
    return (
        <Card>
        <div className="container">
            <h5>Balance: ${balance}</h5>
          <form onSubmit={handleSubmit}>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={withdrawHandleChange}
              value={withdrawBalance}
            />
            <br />
            <Button type="submit">Withdraw Amount</Button>
          </form>
        </div>
      </Card>
    )
};

export default Withdraw;