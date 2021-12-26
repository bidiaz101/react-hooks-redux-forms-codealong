import React, { useState } from "react";
import { useDispatch } from 'react-redux'
import { todoAdded } from './todosSlice'

function CreateTodo() {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  function handleChange(e) {
    setText(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    dispatch(todoAdded(text))
  }

  return (
    <div>
      <form onSubmit={handleSubmit} >
        <p>
          <label>add todo</label>
          <input type='text' onChange={handleChange} value={text} />
        </p>
        <input type='submit' />
      </form>
      <p>Form text: {text}</p>
    </div>
  )
}

export default CreateTodo;
