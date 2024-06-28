import React from 'react'


const Answer = ({id, checked, text, onChangeFunc, register}) => {
  return (
    <div className='answer' key={id}>
        <input 
            name={`answer${id}`}
            id={`answer${id}`}
            type="checkbox"
            // {...register(`answer${id}`)}

        />
        <label htmlFor={`answer${id}`}>{text}</label>
    </div>
  )
}

export default Answer
