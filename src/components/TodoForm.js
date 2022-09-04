import React from 'react'

const Todoform = ({handleSubmit,todo,editId,setTodo}) => {
  return (
<form className="todoform" onSubmit={handleSubmit}>
    <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)}/>
    <button className='btn'>{editId?"edit":"Go"}</button>
</form>
  )
}

export default Todoform