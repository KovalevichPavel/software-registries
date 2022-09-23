import React from "react";
import {Link} from 'react-router-dom';
import FormAuthorization from "../components/authorization/FormAuthorization";

function Authorization() {    
    return (
        <div className="container">
            <div className="authorization_container">
                <Link to="/" className="link">
                    <div className="back_from_authorization">
                        <img src="images/arrow-left-go-back.png" alt="" />
                        <p className="back_from_authorization_text">На главную</p>
                    </div>
                </Link>
                <div className="authorization_block_wrap">
                    <div className="authorization_block">
                        <h2 className="authorization_title">Авторизация</h2>

                        <FormAuthorization />

                        <div className="go_to_creating_account-block">
                            <p className="go_to_creating_account_question">У вас нет аккаунта?</p>
                            <Link to="/createNewAccount">
                                <p className="go_to_creating_account">Нажмите сюда чтобы создать</p>
                            </Link>
                        </div>
                    </div>
                </div>                
            </div>            
        </div>
    )
}

export default Authorization;