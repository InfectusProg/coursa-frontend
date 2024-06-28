import React, { useEffect, useState } from 'react';
import axios from '../axios';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Test from '../components/testPage/Test'

const initialValues = {
  answer1:false,
  answer2:false,
  answer3:false,
  answer4:false
}
//
const onSubmit = values => console.log('Form data:', values)

const TestingPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [currentQuestion, setCurrentQuestion] = useState(1);
  
  // const { tests } = useSelector(state => state.tests);
  // const isTestsLoading = tests.status === 'loading'
  useEffect(() => {
    axios
      .get(`/tests/${id}`)
      .then(res => {
        setData(res.data)
        setIsLoading(false);
      })
      .catch((err) => {
        console.warn(err)
        alert('Помилка при отриманні тесту')
      })
  }, [])

  // const handleQuestionChange = num => setCurrentQuestion(num)

  if (isLoading){
    return (<main></main>)
  }
  return (
    <main>
      <div className='testingPage'>
        <h2 className='testingPageContentTitle'>{data.title}</h2>
        <Test _id={id} content={data} />
      </div>
    </main>
  )
}

export default TestingPage