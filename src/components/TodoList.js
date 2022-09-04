import React from 'react'

export const Todolist = ({handleEdit,handleDelete,todos}) => {
  return (
    <ul className='allTodo'>
    {todos.map((t)=>(
        <li  className='singleTodo'>
        <span className='textTodo' key={t.id}>{t.todo}</span>
      <button onClick={()=>handleEdit(t.id)}>Edit</button>
      <button  onClick={()=>handleDelete(t.id)}>Delete</button>
      </li>
    ))
    }

</ul>
  )
}
