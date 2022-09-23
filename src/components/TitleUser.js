import React from 'react';
import { useSelector } from 'react-redux';
import { selectTitleName } from '../features/titleName/titleNameSlice';


function TitleUser() {
    const titleName = useSelector(selectTitleName);

    return(
        <div className="user_menu_current_user">
            <ul className="user_menu_current_user_list">
                <li className="user_menu_current_user_item"><img src="images/Фото.png" alt='' /></li>
                <li id="user_name" className="user_menu_current_user_item">{titleName}</li>
                <li className="user_menu_current_user_item"><img src="images/upper arrow.png" alt='' /></li>
            </ul>                                    
        </div> 
    )
}

export default TitleUser;