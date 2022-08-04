import React, { useState } from 'react'

const Input = (props) => {
  const {todos,setData} = props;
  
  const [value, setValue] = useState("")

  const handleOnClick = () => {
    setData(prev=>[...prev,{
      checked:false,
      title:value
    }])
    setValue("")
  }

  const handleChange = (e) =>{
    setValue(e.target.value)
  }

  const handleKeyDown = (e) =>{
    if(e.key === 'Enter'){
      handleOnClick()
    }
  }

  return (
    <div className='rounded' >
        <div className='d-flex align-items-center'>
            <textarea value={value} onChange={handleChange} onKeyDown={handleKeyDown} className="form-control border-primary me-2" rows="2"></textarea>
            <button type="button" className="btn btn-primary" onClick={handleOnClick} >Add</button>
        </div>
    </div>
  )
}

export default Input

