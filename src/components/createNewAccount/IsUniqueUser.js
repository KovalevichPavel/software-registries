import React from "react";
import {GetUsers} from '../../authorization/users';

function IsUniqueUser(props) {
    let users = GetUsers();
    let isUniqueUser = true;

    for (let user of users) {
        if (user.name === props.name) isUniqueUser = false;                    
    }

    if (isUniqueUser === false) {
        return (
            <p className="whong_input">имя "{props.name}" уже занято</p>
        )
    }
}

export default IsUniqueUser;