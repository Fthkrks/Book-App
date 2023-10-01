import React from 'react'

const Card = (props) => {
  return (
    <div className={`bg-white dark:bg-[#1D1D1D] dark:text-white absolute z-10 top-7 left-[35%]   ${props.className}`}>

      {props.children}</div>
  )
}

export default Card


// dark:bg-[#1D1D1D]