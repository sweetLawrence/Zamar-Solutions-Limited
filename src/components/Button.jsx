import React from 'react'

const Button = ({content, onClick , widenWidth}) => {
  return (
    <button className={`button ${widenWidth}`} onClick={onClick}>{content}</button>
  )
}

export default Button