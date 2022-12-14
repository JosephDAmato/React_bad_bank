import React, { useEffect, useState } from "react";
import Card from "./UI/Card";
import { Button } from "react-bootstrap";


const AllData = ({users}) => {
  const [userData, setUserData] = useState("blah blah");
  
  useEffect(() =>{
        setUserData(users)
    }, [users]);

  const showData = () => {
    <p>{JSON.stringify(userData)}</p>
  }
  const noData = () => {
    <p>Create an account to show user data</p>
  }
  const clickHandler = () =>{
    console.log(`in AllData: ${JSON.stringify(userData)}`)
  }
    return (
      <div className="container">
        <Card>
           {(!userData ? noData : showData)}
        </Card>
      </div>  
    )
};

export default AllData;