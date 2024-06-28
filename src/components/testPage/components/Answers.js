import React from 'react'
import { useForm } from 'react-hook-form'

const Answers = ({content, index, userAnswers, setUserAnswers, setTrigger}) => {
    const { 
        register, 
        handleSubmit
    } = useForm({
        defaultValues:{},
        mode: 'onChange'
    })

    const storage = JSON.parse(window.localStorage.getItem('answers'))

    const onSubmit = values => {
        setTrigger(true);
        const qAnswer = userAnswers
        qAnswer[index] = Object.values(values).map(value => Number(value));
        setUserAnswers(qAnswer)
        window.localStorage.setItem('answers', JSON.stringify(qAnswer))
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}  className='testingPageContentTestContentAnswers'>
            {
                content.answersValues[index].texts.map((answer, ind) => {
                    const id = `${index}${ind}`
                    return (
                        // <div className='answer' key={`${index}${ind}`}>
                        <>
                            <input 
                                name={`answer${id}`}
                                id={`answer${id}`}
                                type="checkbox"
                                // checked={Boolean(storage[index][ind])}
                                {...register(`answer${id}`)}
                            />
                            <label htmlFor={`answer${id}`}>{answer}</label>
                        </>
                    )
                })    
            }
            <button type="submit">
                Зберегти відповідь
            </button>
        </form>
    )
}

export default Answers
