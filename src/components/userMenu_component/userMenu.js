import { React, useState, useEffect, useCallback } from "react";
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {logOut} from '../../features/titleName/titleNameSlice';


let isAuthorizated = false;

function ChangeIsAuthorizated(...props) {
    console.log(props);
    isAuthorizated = props[0];    
}

function GetIsAuthorizated() {
    return isAuthorizated;
}

function UserMenu() {
    const dispatch = useDispatch(); 

    const [isVisible, setIsVisible] = useState(false);  
    const [closeUserMenu, setCloseUserMenu] = useState(false);
    
    const handleClick = useCallback(() => {
        setIsVisible(!isVisible);
    }, [isVisible]);

    const handleClickBody = useCallback(() => {
        setCloseUserMenu(!closeUserMenu);
        if (isVisible) {
            setIsVisible(!isVisible);
        }
    }, [closeUserMenu]);    
    
    useEffect(() => {
        document
            .getElementsByClassName('user_menu_current_user')[0]
            .addEventListener('click', handleClick);

        return () => {
            document
                .getElementsByClassName('user_menu_current_user')[0]
                .removeEventListener('click', handleClick);
        };
    }, 
    [handleClick]); 

    useEffect(() => {
        document.addEventListener('click', handleClickBody);  

        return () => {
            document.removeEventListener('click', handleClickBody); 
        };
    }, 
    [handleClickBody]); 

    if (isVisible && isAuthorizated) {
        return (
            <div className="user_menu_wrap">
                <ul className="user_menu_ul">
                    <Link to="/" onClick={() => {ChangeIsAuthorizated(false); dispatch(logOut())}} className="link user_menu_links">
                        <li className="user_menu_li">
                            Выйти
                        </li>
                    </Link>                    
                </ul>
            </div>
        )
    } else if (isVisible) {
        return(
            <div className="user_menu_wrap">
                <ul className="user_menu_ul">
                    <Link to="/authorization" className="link user_menu_links">
                        <li className="user_menu_li">
                            Войти
                        </li>
                    </Link>
                </ul>
            </div>
        )        
    }
    else {
        return ('');
    }
}

export default UserMenu;
export {ChangeIsAuthorizated, GetIsAuthorizated};