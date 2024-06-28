import React, { useEffect }  from 'react'
import RouteButton from './RouteButton'

const RoutingSelect = ({userAnswers, trueAnswers, trigger, setTrigger}) => {

  // console.log(trueAnswers)
  // console.log(userAnswers)

  useEffect(()=>{
    if(trigger){
      setTrigger(false)
    }
  },[trigger])

  return (
    <div className='testingPageRoutingLower'>
    {
      trueAnswers.map((item, index) => {
        return (
          <RouteButton 
            key={index} 
            id={index}
            userAnswer={userAnswers[index] }
          />
        )
      })
    }
    </div>
  )
}

export default RoutingSelect

