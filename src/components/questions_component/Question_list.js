import React from 'react';
import Question_item from './Question_item';


const questions = [
    {id: 0, question: "Для подачи заявления необходимо подготовить", answer: <ol className="answer_text"><li className="answer_text-li">Данные для авторизации в личном кабинете</li><li className="answer_text-li">Квалифицированный сертификат ключа проверки электронной подписи.</li><li className="answer_text-li">Сведения, документы и материалы в соответствии с Методическими рекомендациями.</li><li className="answer_text-li">Установить специализированное ПО для подписания документов электронной подписью. Подписание производится с использованием усиленной квалифицированной (отсоединяемой) электронной подписи.</li></ol>},
    {id: 1, question: "Связь с оператором реестра", answer: <ol className="answer_text"><li className="answer_text-li">Адрес сайта</li><li className="answer_text-li">связь</li></ol>},
    {id: 2, question: "Как подать заявление на включение программного обеспечения в реестр", answer: <p className="answer_text">Подача документов происходит через личный кабинет. На первом этапе необходимо заполнить заявку, загрузить пакет сопровождающих документов и подписать их организации. Заявка отправляется на проверку по формальным основаниям.</p>},
]

function Question_list() {
    return(
        <div className="question_list">
            
            <Question_item props={questions[0]}/>
            <Question_item props={questions[1]}/>
            <Question_item props={questions[2]}/>

        </div>
    )        
} 

export default Question_list;