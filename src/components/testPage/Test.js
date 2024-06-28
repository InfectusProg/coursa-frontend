import React, { useEffect, useState } from 'react'
import Question from './components/Question'
import Answers from './components/Answers'
import Timer from './components/Timer'
import RoutingSelect from './routing/RoutingSelect'
import axios from '../../axios'
import { useNavigate } from 'react-router-dom'

const Test = ({
    _id,
    content
}) => {
    const [userAnswers, setUserAnswers] = useState(Array(content.answersValues.length))
    const [trigger, setTrigger] = useState(false);
    const [timerCountdown, setTimerCountdown] = useState(false)
    const [dataSent, setDataSent] = useState(false)
    const trueAnswers = content.answersValues.map(answers => {
        return Object.values(answers)[1]
    })
    const navigate = useNavigate();

    const giveResult = (array1, array2) => {
        const arraysEqual = (arr1, arr2) => {
            if (arr1.length !== arr2.length) return false;
            return arr1.every((value, index) => value === arr2[index]);
        };
        
        const countMatches = (arr1, arr2) => {
            return arr1.reduce((count, item1) => {
                return count + arr2.some(item2 => arraysEqual(item1, item2));
            }, 0);
        };

        const matches = countMatches(array1, array2);
        return matches;
    }

    const submitTestResult = async () =>{
        setTimerCountdown(false)
        const params = { 'score': giveResult(userAnswers, trueAnswers)}
        try {
            axios.post(`/scores/${_id}`, params)
            window.localStorage.removeItem('answers')
            window.localStorage.removeItem('timer')
            setDataSent(true)
            navigate('/');
        } catch (err) {
            console.warn(err)
            alert('Помилка при надсиланні результату')
        }
    }
    
    // giveResult((userAnswers, trueAnswers))

    return (
        <div className='testingPageContent'>
        {
            <>
                <div className="testingPageContentTest">
                    {
                        content.questionsText.map((text, index) => {
                            return (
                                <>
                                    <div 
                                        key={`s${index}`}
                                        className='testingPageContentTestContent'
                                    >
                                        <Question 
                                            id={index+1}
                                            text={text}
                                        />
                                        <Answers 
                                            content={content}
                                            index={index}
                                            userAnswers={userAnswers}
                                            setUserAnswers={setUserAnswers}
                                            setTrigger={setTrigger} 
                                        />
                                    </div>  
                                </>
                            )
                        })
                    }
                    <div className='testingPageRouting'>
                        <Timer 
                            timerCountdown={timerCountdown}
                            setTimerCountdown={setTimerCountdown}
                            submitTestResult={submitTestResult} 
                            initialSeconds={content.completionTime}
                        />
                        <button 
                            className='submitScoreBtn' 
                            onClick={() => {
                                submitTestResult()
                            }}
                        >
                            Результат
                        </button>
                        <RoutingSelect
                            trigger={trigger}
                            setTrigger={setTrigger} 
                            trueAnswers={trueAnswers}
                            userAnswers={userAnswers} 
                        />
                    </div>
                </div>
                    {/* {
                    content.questionsText.map((quest, index) => {
                        return (
                                <div 
                                    key={`s${index}`}
                                    className='testingPageContentTestContent'
                                >
                                    <Question 
                                        id={index+1}
                                        text={quest.question}
                                    />
                                    <div className='testingPageContentTestContentAnswers'>
                                        {
                                            quest.answers[index].texts.map((ans, ind) => {
                                                return (
                                                    // <Answer
                                                    //     id={`a${ind}`}
                                                    //     text={ans}
                                                    // />
                                                    <div key={`a${ind}`}>
                                                        {console.log(ans) }
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                        )
                    })
                    } */}
                    {/* </div> */}
                    {/*  */}
            </>
        }
        </div>
  )
}



export default Test
