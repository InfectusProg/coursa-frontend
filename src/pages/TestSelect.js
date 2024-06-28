import React, { useEffect, useState } from 'react';
import TestingPage from './TestingPage'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { fetchTests } from '../redux/slices/tests';
import { Navigate } from 'react-router-dom';
import { selectIsAuth } from '../redux/slices/auth';

const TestSelect = () => {
    const isAuth = useSelector(selectIsAuth)
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const dispatch = useDispatch();
    const { tests } = useSelector(state => state.tests);
    const isTestsLoading = tests.status === 'loading'

    useEffect(() => {
        dispatch(fetchTests())
    }, [])
    
    if(!isAuth){
        return <Navigate to="/"/>
    }

    // console.log(tests)
    
    if (tests.status === "loading"){
        return (<main></main>)
    } 
    else if (tests.status === "loaded") {
        const testData = tests.items
        // .map(item => {
        //     const content = item.questionsText.map((question, index) => ({
        //         question: question,
        //             answers: item.answersValues[index]
        //         })
        //     );
        //     return {
        //         title: item.title,
        //         content
        //     };
        // });
        console.log(testData)
        console.log(tests)
        return (
            <main>
                <div className="testSelectPage">
                    <h2>TEST SELECT</h2> 
                    <div className="testSelectPageSelect">
                        <div className="testSelectPageSelectHead">
                            <h3 className='title'>Назва</h3>
                            <h3 className='length'>К-сть питань</h3>
                            <h3 className='time'>Час на проходження</h3>
                            <h3 className='time'>Посилання</h3>
                        </div>
                        {
                            !isTestsLoading ?
                                testData.map((item, index) => (
                                    <div 
                                        key={index}
                                        className='testSelectPageSelectTail'
                                    >
                                        <h3 className='title'>{item.title}</h3>
                                        {/* <h3>{item._id}</h3> */}
                                        <h3 className='length'>{item.questionsText.length}</h3>
                                        <h3 className='time'>{item.completionTime/60}хв</h3>
                                        <Link to={`/testpage/${item._id}`}>Перейти до тесту</Link>
                                    </div>
                                )) 
                                : (<></>)
                        } 
                    </div>
                </div>
                {/* <Link to='/testpage/:id'>Перейти до тестування</Link> */}
                {/* <TestingPage/> */}
            </main>
        )
    }
        
}

export default TestSelect
