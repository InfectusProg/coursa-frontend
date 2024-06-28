import React from 'react'

function Question({id, text}) {
  return (
    <div className="testingPageContentTestContentQuestion">
      <h3>Питання №{id}</h3>
      {
        text ?
        (<p>
          {text}
        </p>) :
        <p>Lorem</p>
      }
    </div>
  )
}

export default Question
