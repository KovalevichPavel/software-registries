import React, { useState} from 'react';
import Answer from './Answer';

function Question_item(props) {
    const answer = props.props.answer;
    const [isShown, setIsShown] = useState(false);    

    function toggleAnswer() {
        if (!isShown) {            
            setIsShown(true);                          
        }
        else {            
            setIsShown(false);                                   
        }        
    }

    return (
        <div className="question_item">
            <div className="question_block">
                <img className="question_btn" src="images/Раскрыть.png" alt="" onClick={() => toggleAnswer()} />
                <p className="question_text">{props.props.question}</p>
            </div>     
            <Answer answer={answer} isShown={isShown} />
        </div>
    )
}

export default Question_item;