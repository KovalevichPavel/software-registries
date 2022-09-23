import React from "react";
import Question_list from '../components/questions_component/Question_list';
import {Link} from 'react-router-dom';

function Main() {
    return (
        <>
            <div className="header__content">
                        <div className="container">
                            <div className="header__content_title">
                                <div className="header__content_title_info">
                                    <h1 className="title">РЕЕСТР ПРОГРАММНОГО ОБЕСПЕЧЕНИЯ</h1>
                                    <p className="title_info">Единый реестр программ для электронных вычислительных машин и баз данных</p>
                                    <p className="title_info">
                                        Включено ПО в реестр: <span className="title_info_value">13 438</span><br />
                                        Правообладателей: <span className="title_info_value">4 272</span>
                                    </p>
                                    
                                    <form className="search_form">
                                        <input className="search header__content_title_search" type="text" placeholder="Поиск в реестре..." />
                                        <button className="search__button">Искать</button>
                                    </form> 
                                </div>                           
                                
                                <img src="images/3d Office Work 1.png" alt="img" className="header__content__img" />
                            </div>          
                        </div>
                    </div>               
            <section className="product">
                <div className="container">
                    <div className="registries">
                        <div className="registries_top">
                            <h2 className="block__title">Реестры</h2>
                            <div className="registries_top_filter">
                                <img src="images/filter.png" alt='' />
                                <img src="images/three-dots-vertical.png" alt='' />
                            </div>
                        </div>

                        <table className="table">
                            <tbody>
                                <tr className="tr">
                                    <th className="th">Регистрационный номер</th>
                                    <th className="th">Наименование программного обеспечения</th>
                                    <th className="th">Код класса</th>
                                    <th className="th">Класс программного обеспечения</th>
                                    <th className="th">Дата регистрации</th>
                                    <th className="th">Адрес сайта</th>
                                </tr>              
                                <tr className="tr">
                                    <td className="td registries__table_td-id">#1</td>
                                    <td className="td registries__table_td-name"></td>
                                    <td className="td registries__table_td-code"></td>
                                    <td className="td registries__table_td-className"></td>
                                    <td className="td registries__table_td-date"></td>
                                    <td className="td registries__table_td-site"></td>
                                </tr>
                                <tr className="tr">
                                    <td className="td registries__table_td-id">#2</td>
                                    <td className="td registries__table_td-name"></td>
                                    <td className="td registries__table_td-code"></td>
                                    <td className="td registries__table_td-className"></td>
                                    <td className="td registries__table_td-date"></td>
                                    <td className="td registries__table_td-site"></td>
                                </tr>
                                <tr className="tr">
                                    <td className="td registries__table_td-id">#3</td>
                                    <td className="td registries__table_td-name"></td>
                                    <td className="td registries__table_td-code"></td>
                                    <td className="td registries__table_td-className"></td>
                                    <td className="td registries__table_td-date"></td>
                                    <td className="td registries__table_td-site"></td>
                                </tr>
                                <tr className="tr">
                                    <td className="td registries__table_td-id">#4</td>
                                    <td className="td registries__table_td-name"></td>
                                    <td className="td registries__table_td-code"></td>
                                    <td className="td registries__table_td-className"></td>
                                    <td className="td registries__table_td-date"></td>
                                    <td className="td registries__table_td-site"></td>
                                </tr>
                                <tr className="tr">
                                    <td className="td registries__table_td-id">#5</td>
                                    <td className="td registries__table_td-name"></td>
                                    <td className="td registries__table_td-code"></td>
                                    <td className="td registries__table_td-className"></td>
                                    <td className="td registries__table_td-date"></td>
                                    <td className="td registries__table_td-site"></td>
                                </tr>
                                <tr className="tr">
                                    <td className="td registries__table_td-id">#6</td>
                                    <td className="td registries__table_td-name"></td>
                                    <td className="td registries__table_td-code"></td>
                                    <td className="td registries__table_td-className"></td>
                                    <td className="td registries__table_td-date"></td>
                                    <td className="td registries__table_td-site"></td>
                                </tr>
                                <tr className="tr">
                                    <td className="td registries__table_td-id">#7</td>
                                    <td className="td registries__table_td-name"></td>
                                    <td className="td registries__table_td-code"></td>
                                    <td className="td registries__table_td-className"></td>
                                    <td className="td registries__table_td-date"></td>
                                    <td className="td registries__table_td-site"></td>
                                </tr>
                                <tr className="tr">
                                    <td className="td registries__table_td-id">#8</td>
                                    <td className="td registries__table_td-name"></td>
                                    <td className="td registries__table_td-code"></td>
                                    <td className="td registries__table_td-className"></td>
                                    <td className="td registries__table_td-date"></td>
                                    <td className="td registries__table_td-site"></td>
                                </tr>
                                <tr className="tr">
                                    <td className="td registries__table_td-id">#9</td>
                                    <td className="td registries__table_td-name"></td>
                                    <td className="td registries__table_td-code"></td>
                                    <td className="td registries__table_td-className"></td>
                                    <td className="td registries__table_td-date"></td>
                                    <td className="td registries__table_td-site"></td>
                                </tr>
                                <tr className="tr">
                                    <td className="td registries__table_td-id">#10</td>
                                    <td className="td registries__table_td-name"></td>
                                    <td className="td registries__table_td-code"></td>
                                    <td className="td registries__table_td-className"></td>
                                    <td className="td registries__table_td-date"></td>
                                    <td className="td registries__table_td-site"></td>
                                </tr>      
                            </tbody>        
                        </table>

                        <div className="registries__navigation_wrap">
                            <div className="registries__navigation">
                                <img className="registries__navigation_img" src="images/double-arrow-left.png" alt='' />
                                <img className="registries__navigation_img" src="images/arrow-left.png" alt='' />
                                <button className="registries__navigation_number registries__navigation_number-on">1</button>              
                                <img className="registries__navigation_img" src="images/arrow-right.png" alt='' />
                                <img className="registries__navigation_img" src="images/double-arrow-right.png" alt='' />
                            </div>
                        </div>            
                    </div>            
                </div>


                <div className="container">
                    <div className="registries__news">
                        <div className="registries_top_news">
                            <h2 className="block__title">Новости реестра</h2>
                        </div>
                
                        <div className="registries__news_content">
                            <div className="registries__new_block">
                                <div className="registries__new_block_img"></div>
                                <h4 className="registries__new_block_name">Технические работы 30.05.2022</h4>
                                <div className="registries__new_block_date">
                                    <img src="images/notes-calendar_small.png" alt='' />
                                    <p className="registries__new_block_date_content">30.05.2022</p>
                                </div>
                                <p className="registries__new_block_description">В связи с проведением технических работ 30.05.2022 с 15:00 могут наблюдаться пер...</p>
                            </div>            
                            <div className="registries__new_block">
                                <div className="registries__new_block_img"></div>
                                <h4 className="registries__new_block_name">Технические работы 30.05.2022</h4>
                                <div className="registries__new_block_date">
                                    <img src="images/notes-calendar_small.png" alt=""/>
                                    <p className="registries__new_block_date_content">30.05.2022</p>
                                </div>
                                <p className="registries__new_block_description">В связи с проведением технических работ 30.05.2022 с 15:00 могут наблюдаться пер...</p>
                            </div> 
                            <div className="registries__new_block">
                                <div className="registries__new_block_img"></div>
                                <h4 className="registries__new_block_name">Технические работы 30.05.2022</h4>
                                <div className="registries__new_block_date">
                                    <img src="images/notes-calendar_small.png" alt='' />
                                    <p className="registries__new_block_date_content">30.05.2022</p>
                                </div>
                                <p className="registries__new_block_description">В связи с проведением технических работ 30.05.2022 с 15:00 могут наблюдаться пер...</p>
                            </div> 
                            <div className="registries__new_block">
                                <div className="registries__new_block_img"></div>
                                <h4 className="registries__new_block_name">Технические работы 30.05.2022</h4>
                                <div className="registries__new_block_date">
                                    <img src="images/notes-calendar_small.png" alt='' />
                                    <p className="registries__new_block_date_content">30.05.2022</p>
                                </div>
                                <p className="registries__new_block_description">В связи с проведением технических работ 30.05.2022 с 15:00 могут наблюдаться пер...</p>
                            </div> 
                            <div className="registries__new_block">
                                <div className="registries__new_block_img"></div>
                                <h4 className="registries__new_block_name">Технические работы 30.05.2022</h4>
                                <div className="registries__new_block_date">
                                    <img src="images/notes-calendar_small.png" alt='' />
                                    <p className="registries__new_block_date_content">30.05.2022</p>
                                </div>
                                <p className="registries__new_block_description">В связи с проведением технических работ 30.05.2022 с 15:00 могут наблюдаться пер...</p>
                            </div> 
                            <div className="registries__new_block">
                                <div className="registries__new_block_img"></div>
                                <h4 className="registries__new_block_name">Технические работы 30.05.2022</h4>
                                <div className="registries__new_block_date">
                                    <img src="images/notes-calendar_small.png" alt='' />
                                    <p className="registries__new_block_date_content">30.05.2022</p>
                                </div>
                                <p className="registries__new_block_description">В связи с проведением технических работ 30.05.2022 с 15:00 могут наблюдаться пер...</p>
                            </div> 
                        </div>  
                                                
                        <div className="registries_btn_show_all_wrap">
                            <Link to="/registriesNews" className="registries_a_show_all">
                                <button className="registries_btn_show_all">
                                    Показать все
                                </button>
                            </Link>
                            {/* <Routes>
                                <Route path='/registriesNews' element={<RegistriesNews />}></Route>                       
                            </Routes>      */}
                            
                        </div>            
                    </div>
                </div>   
            
            
                <div className="container">
                    <div className="documents">
                    <div className="documents__top">
                        <h2 className="block__title">Документы</h2>
                        <p className="title_info">Всего документов: <span className="title_info_value">5</span></p>
                    </div>

                    <table className="table">
                    <tbody>
                        <tr className="tr">
                        <th className="th">Категория</th>
                        <th className="th">Наименование</th>
                        <th className="th">Дата</th>
                        <th className="th">номер</th>
                        <th className="th">Содержание</th>
                        </tr>              
                        <tr className="tr">
                        <td className="td">Общие документы</td>
                        <td className="td">Постановление Правительства Российской Федерации от 20.07.2021 "О внесении изменений в постановление Правительства Российской Федерации от 16 ноября 2015 г. № 1236"</td>
                        <td className="td">20.07.2021</td>
                        <td className="td">1226</td>
                        <td className="td">
                            <div className="document__download">
                            <img src="images/download.png" alt='' />
                            Скачать (469 Кб)
                            </div>                  
                        </td>
                        </tr>            
                        <tr className="tr">
                        <td className="td">Общие документы</td>
                        <td className="td">Приказ №486 от 22.09.2020 Об утверждении классификатора программ для электронных вычислительных машин и баз данных</td>
                        <td className="td">22.09.2020</td>
                        <td className="td">468</td>
                        <td className="td">
                            <div className="document__download">
                            <img src="images/download.png" alt='' />
                            Скачать (10.81 Мб)
                            </div>                  
                        </td>
                        </tr>            
                        <tr className="tr">
                        <td className="td">Общие документы</td>
                        <td className="td">Административный регламент ПРИКАЗ от 21 февраля 2019 года N62</td>
                        <td className="td">21.02.2019</td>
                        <td className="td">62</td>
                        <td className="td">
                            <div className="document__download">
                            <img src="images/download.png" alt='' />
                            Скачать (2.25 Мб)
                            </div>                  
                        </td>
                        </tr>            
                        <tr className="tr">
                        <td className="td">Общие документы</td>
                        <td className="td">Об утверждении правил применения классификатора программ для электронных вычислительных машин и баз данных</td>
                        <td className="td">31.12.2015</td>
                        <td className="td">622</td>
                        <td className="td">
                            <div className="document__download">
                            <img src="images/download.png" alt='' />
                            Скачать (4.69 Мб)
                            </div>                  
                        </td>
                        </tr>            
                        <tr className="tr">
                        <td className="td">Общие документы</td>
                        <td className="td">Постановление Правительства РФ от 20.12.2017 № 1594 "О внесении изменений в постановление Правительства Российской Федерации от 16 ноября 2015 г. № 1236"</td>
                        <td className="td">20.12.2017</td>
                        <td className="td">1594</td>
                        <td className="td">
                            <div className="document__download">
                            <img src="images/download.png" alt='' />
                            Скачать (2.07 Мб)
                            </div>                  
                        </td>
                        </tr>  
                        </tbody>          
                    </table>
                    </div>          
                </div>
            </section>


            <div className="container">
                <div className="questions">
                    <div className="questions__top">
                    <h2 className="block__title">Вопрос-ответ</h2>
                    </div>         
                    
                    <Question_list />
                                                                                    
                </div>         
            </div>
        </>
    )
}

export default Main;