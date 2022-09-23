import {Link, Outlet} from 'react-router-dom';
import UserMenu from './userMenu_component/userMenu';
import TitleUser from './TitleUser';

function Layout() {
  function ScrollToRegistries() {
    document.getElementsByClassName('registries_top')[0].scrollIntoView();    
  }

  function ScrollToNews() {
      document.getElementsByClassName('registries_top_news')[0].scrollIntoView();    
  }

  function ScrollToDocuments() {
      document.getElementsByClassName('documents__top')[0].scrollIntoView();    
  }

  function ScrollToQuestions() {
      document.getElementsByClassName('questions')[0].scrollIntoView();    
  }
  
  return (
      <>
        <header className="header">
          <div className="container">        
              <div className="header__top">          

                <Link to="/" className="logo" id='logo'>
                  <img src="images/Vector.png" alt="Логотип компании" className="logo__img" />
                </Link>
                
                <input className="search header__top_search" type="text" placeholder="Поиск" />

                <ul className="user_menu_list">
                    <li id="calendar" className="user_menu_item"><img className="user_menu_list celendar__img" src="images/notes-calendar.png" alt='' /></li>
                    <li id="bell" className="user_menu_item"><img className="user_menu_list bell__img" src="images/bell.png" alt='' /></li>
                    <div className="header_top_vertical_line"></div>
                    <li className="user_menu_item">                                     
                        <TitleUser />
                        <UserMenu />
                    </li>
                </ul>
                  
              </div>
          </div>                    
        </header>     
            
      <main className="main">  

        <Outlet />
        
      </main>   

      <footer className="footer">
        <div className="container">
          <div className="footer__inner">
            <div className="footer__inner_about">
              <img src="images/Vector.png" alt='' />
              <p className="footer__inner_about_text">Открытое акционерное общество «Реестр» начало практическую деятельность с 5 марта 2015 г</p>
              <div className="footer__inner_about_developer">
                <h5 className="footer__inner_about_developer-title">Разработчик</h5>
                <p className="footer__inner_about_company-name">ОАО «Агентство реестров ПО»</p>
                <p className="footer__inner_about_developer-adress">Байкит, улица Бояки, 1</p>
              </div>
            </div>
            <div className="footer__inner_about_info">
              <h4 className="footer__inner_title">Информация</h4>
              <ul className="footer__inner_list">
                <li id="to_registries" className="footer__inner_list_item" onClick={ScrollToRegistries}>Реестры</li>
                <li id="to_news" className="footer__inner_list_item" onClick={ScrollToNews}>Новости</li>
                <li id="to_documents" className="footer__inner_list_item" onClick={ScrollToDocuments}>Документы</li>
                <li id="to_questions" className="footer__inner_list_item" onClick={ScrollToQuestions}>Вопросы</li>
              </ul>
            </div>
            <div className="footer__inner_support">
              <h4 className="footer__inner_title">Техническая поддержка</h4>
              <p className="footer__inner_support_info">Ежедневно с 8.00 до 19.00, за исключением выходных (суббота, воскресенье) и праздничных дней.</p>
              <ul className="footer__inner_list">
                <li className="footer__inner_list_item">+375 25 111 11 11</li>
                <li className="footer__inner_list_item">+375 29 222 22 22</li>
                <li className="footer__inner_list_item">ReestrSupport@mail.ru</li>
              </ul>
            </div>
            <div className="footer__inner_contacts">
              <h4 className="footer__inner_title">Контакты</h4>
              <ul className="footer__inner_list">
                <li className="footer__inner_list_item">+375 25 111 11 11</li>
                <li className="footer__inner_list_item">+375 29 222 22 22</li>
                <li className="footer__inner_list_item">ReestrSupport@mail.ru</li>
                <li className="footer__inner_list_item">111111 г. Байкит, ул. Бояки, 35</li>
                <li className="footer__inner_list_item"><a className="footer__inner_list_link" href="tel:+375251111111">Связаться с поддержкой</a></li>
              </ul>
            </div>
          </div>

          <div className="footer__outer">
            <p className="tooter__outer_text">© Copyright 2022 — ОАО «Реестр». Все права защищены.</p>
          </div>
        </div>
      </footer> 
    </>     
  )
}

export default Layout;