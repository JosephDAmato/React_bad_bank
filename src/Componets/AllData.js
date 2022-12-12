import React, { useEffect, useState } from "react";
import Card from "./UI/Card";
import { Button } from "react-bootstrap";
const AllData = ({users}) => {
    const [userData, setUserData] = useState();
    useEffect(() =>{
        setUserData(users)
    }, [users])
 const clickHandler = () =>{
    console.log(`in AllData: ${JSON.stringify(userData)}`)
 }
    return (
      <div className="container">
        <Card>
           
        </Card>
        <Button onClick={clickHandler}>Show Data</Button>
      </div>  
    )
};

export default AllData;