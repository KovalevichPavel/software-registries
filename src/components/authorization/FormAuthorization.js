import React, { useState} from 'react';
import {useNavigate} from "react-router-dom";
import {GetUsers} from '../../authorization/users';
import {ChangeIsAuthorizated} from '../userMenu_component/userMenu';
import {useDispatch} from 'react-redux';
import {logIn} from '../../features/titleName/titleNameSlice';


function FormAuthorization() {
    const dispatch = useDispatch(); 
    
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangePass(e) {
        setPass(e.target.value);        
    }

    let navigate = useNavigate();
    function handleSubmit(e) {
        e.preventDefault();        

        let isNameMatches = false;
        let isPassMatches = false;
        let users = GetUsers();

        for (let user of users) {
            if (user.name === name) isNameMatches = true;            
            if (user.pass === pass) isPassMatches = true;   
            if (isNameMatches && isPassMatches) {
                break;
            } else {
                isNameMatches = false;
                isPassMatches = false;
            }
        }

        if (!isNameMatches && !isPassMatches) alert('Неверный пароль или имя');

        if (isNameMatches && isPassMatches) {
            ChangeIsAuthorizated(true); 
            dispatch(logIn(name));  
            navigate("/", { replace: true });
        }  
    } 
        
    return(
        <>
            <form onSubmit={handleSubmit}>
                <div className="authorization_input_block">
                    <p className="authorization_input_name">Имя</p>
                    <input className="search authorization_input" type="text" placeholder="Введите имя" value={name} onChange={handleChangeName} />
                </div>
                <div className="authorization_input_block">
                    <p className="authorization_input_name">Пароль</p>
                    <input className="search authorization_input" type="text" placeholder="Введите пароль" value={pass} onChange={handleChangePass} />
                </div>
                <button type="submit" className="authorization_btn_logIn">Войти</button>
            </form>
        </>
    )
}

export default FormAuthorization