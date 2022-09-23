import React from "react";
import {Link} from 'react-router-dom';
import FormCreateNewAccount from "../components/createNewAccount/FormCreacteNewAccount";

function CreateNewAccount() {
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
                        <h2 className="authorization_title">Создание аккаунта</h2>
                        
                        <FormCreateNewAccount />

                        <div className="go_to_creating_account-block">
                            <p className="go_to_creating_account_question">У вас уже есть аккаунт?</p>
                            <Link to="/authorization">
                                <p className="go_to_creating_account">Нажмите сюда чтобы войти</p>
                            </Link>
                        </div>
                    </div>
                </div>                
            </div>            
        </div>
    )
}

export default CreateNewAccount;