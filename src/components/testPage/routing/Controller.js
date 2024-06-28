import React from 'react'
import RoutingSelect from './RoutingSelect'
import { Link as ScrollLink, Element, animateScroll as scroll } from 'react-scroll';
import Timer from '../components/Timer';

const Controller = ({questions, initialSeconds, giveResult}) => {
    // const next = ''
    // const back = '';
    return (
        <div className='testingPageRouting'
        >
            <Timer initialSeconds={initialSeconds}/>
            <button onClick={() => giveResult()}>Результат</button>
            <RoutingSelect
                questions={questions} 
            />
        </div>
    )
}

export default Controller
