import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectIsAuth } from '../redux/slices/auth'
import { useForm } from 'react-hook-form'

const TestRedactor = () => {
  const [questions, setQuestions] = useState([]);
  const [count, setCount] = useState(0);
  const isAuth = useSelector(selectIsAuth)
    const { 
        register, 
        handleSubmit, 
        setError, 
        formState: { 
            errors,
            isValid 
        } 
    } = useForm({
        mode: 'onChange'
    })

    const onSubmit = values => console.log(values)

    const createQuestion = () => {
      const newQuestion = 'Question'
      setQuestions([...questions, newQuestion])
    }
    console.log(questions)
    console.log(questions.length)

    return (
        <main>
          <div className="testRedactor">
            <h1>Test Redactor</h1>
            <form className='testRedactorPage' onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor='email'>Назва тесту</label>
              <input
                type="text" 
                name='title'
                {...register('title', {required: 'Укажіть пошту'})}
              />
              <div>
                <button onClick={() => createQuestion()}>Створити питання</button>
                {
                  questions.length > 0 ?
                  questions.map((item, index) => {
                    return (
                    <>
                      <div key={index}>{item}</div>
                      <input type="text" name={`${item}${index}`}/> 
                    </>
                    )
                  })              
                  : <></>
                }
              </div>
              <input type="submit" value="Відправити"/>
            </form>
          </div>
        </main>
    )
}

export default TestRedactor
