import React from 'react'

const RouteButton = ({id, userAnswer}) => {

    return (
        <button
            className={
                userAnswer ? 
                'route-btn btn-sent' : 
                'route-btn btn-not-sent'
            }
        >
            {id+1}
        </button>
    )
}

export default RouteButton

