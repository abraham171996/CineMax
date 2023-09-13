import React from 'react'

const Input = ({value,name,type,htmlFor,text,placeholder,...props}) => {
  return (
    <>
        <label htmlFor={htmlFor}>{text}</label>
      <input {...props} placeholder={placeholder} value={value} type={type} name={name}/>
    </>
  )
}

export default Input