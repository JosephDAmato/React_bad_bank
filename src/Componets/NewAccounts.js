import React from "react";
import CreateAccount from "./CreateAccount";

const NewAccounts = (props) => {

        const saveNewUserHandler = (enteredUserValue) => {
            console.log(`In NewAcc.js: ${JSON.stringify(enteredUserValue)}`)
            const userData = {
                ...enteredUserValue,
            };
        props.onAddUser(userData);
        };

    return(
        <div>
        <CreateAccount onSaveUserValue={saveNewUserHandler} />
        </div>
    )
};

export default NewAccounts