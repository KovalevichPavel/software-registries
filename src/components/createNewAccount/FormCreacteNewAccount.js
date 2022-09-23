import React, { useState} from 'react';
import {useNavigate} from "react-router-dom";
import {GetUsers, AddUser} from '../../authorization/users';
import IsUniqueUser from './IsUniqueUser';


function FormCreateNewAccount() {
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');
    const [passAgain, setPassAgain] = useState('');

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangePass(e) {
        setPass(e.target.value);        
    }

    function handleChangePassAgain(e) {
        setPassAgain(e.target.value);        
    }
    

    let navigate = useNavigate();
    function handleSubmit(e) {
        e.preventDefault();

        let isUniqueUser = true;
        let isCorrectName = true;
        let isCorrectPass = true;
        let isPassEqualPassAgain = true;
        let users = GetUsers();

        for (let user of users) {
            if (user.name === name) isUniqueUser = false;                    
        }
        if (name.length < 3) isCorrectName = false;
        if (pass.length < 3) isCorrectPass = false;
        if (pass !== passAgain) isPassEqualPassAgain = false;

        if (isCorrectName === false || isCorrectPass === false) alert('Пароль и имя должны быть больше 3 символов');
        if (isPassEqualPassAgain === false) alert('Пароли не соответствуют');

        if (isUniqueUser && isCorrectName && isCorrectPass && isPassEqualPassAgain) {
            AddUser({name: name, pass: pass});
            navigate("/authorization", { replace: true });
        }  
    } 

    return(
        <>
            <form onSubmit={handleSubmit}>
                <div className="authorization_input_block">
                    <p className="authorization_input_name">Имя</p>
                    <input className="search authorization_input" type="text" placeholder="Введите имя" value={name} onChange={handleChangeName} />
                    <IsUniqueUser name={name} />
                </div>
                <div className="authorization_input_block">
                    <p className="authorization_input_name">Пароль</p>
                    <input className="search authorization_input" type="text" placeholder="Введите пароль" value={pass} onChange={handleChangePass} />
                </div>
                <div className="authorization_input_block">
                    <p className="authorization_input_name">Подтвердите пароль</p>
                    <input className="search authorization_input" type="text" placeholder="Введите пароль" value={passAgain} onChange={handleChangePassAgain} />
                </div>
                <button type="submit" className="authorization_btn_logIn">Создать</button>
            </form>        
        </>
    )
}

export default FormCreateNewAccount;