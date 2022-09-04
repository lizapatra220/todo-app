import React,{useState} from 'react'
import "./App.css";
const App =()=> {
  //  const arr=[
  //   {
  //    id:1,
  //     name:"reena"
  //  },
  //   {
  //     id:2,
  //      name:"liza"
  //    }
  // ];
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, seteditId] = useState(0);
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(editId){
      const editTodo = todos.find((i)=>i.id===editId);
      const updateTodo = todos.map((t)=>
      t.id===editTodo.id?
      (t={id:t.id,todo})
      :{id:t.id,todo:t.todo}
      );
      setTodos(updateTodo);
      seteditId(0);
      setTodo(" ");
      return;


    }
    if(todo!==" "){
      setTodos([{id:`${todo}-${Date.now()}`,todo},...todos]);
      setTodo(" ");
    }
  
  };
  const handleDelete =(id)=>{
    const dele =todos.filter((to)=>to.id!==id)
    setTodos([...dele]);

  };
  const handleEdit=(id)=>{
    const edit =todos.find((i)=>i.id===id)
    setTodo(edit.todo);
    seteditId(id);


  };
  return (
    <div className="App">
      <div className="container">
        <h1>Todo List App</h1>
        <form className="todoform" onSubmit={handleSubmit}>
        <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)}/>
        <button className='btn'>{editId?"edit":"Go"}</button>
      </form>
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
      </div>
      
    </div>
  );
};

export default App;



















/* <div className="App">
{
  arr.map((num)=>(
    <div>
      {num},

    </div>
  ))
}
</div> */

/* <div className="App">
      {
        arr.filter((num)=>(num!==3))
        
      </div> */

      
      //  {
      //   arr.map((num)=>{
      //     return(
      //       <div key={num.id}>{num.name}</div>
      //     )
      //   })
      // }

