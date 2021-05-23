import React,{useState} from "react"
import './App.css';

function App() {
const [todo, settodo] = useState('')
const [alltodo,setAlltodo]=useState([])
const [editTodo, setEditTodo] = useState(null)
const [editText, setEditText] = useState('')

 const addtodo=(e)=>{
   e.preventDefault()
    const  newTodo={
          id:new Date().getTime(),
          text:todo,
          
    }

    setAlltodo([...alltodo].concat(newTodo))
    settodo('')
            
 }
 const deleTodo=(id)=>{
   const tododel=[...alltodo].filter((todo)=>todo.id =! id)
   setAlltodo(tododel)
 }

 const saveTodo=(id)=>{
         const todosave=[...alltodo].map((todo)=>{
                if(todo.id === id){
                   todo.text=editText
                }
                return todo
         })
         setAlltodo(todosave)
         setEditTodo(null)
         setEditText("")
 }



  
  return (
    <div className=" container main">
          
          <h1>Todo List</h1>

       <form   onSubmit={addtodo}>
       <input type="text" 
          placeholder="Add todo"
          value={todo}
          onChange={(e)=>settodo(e.target.value)}
          

       
       />
       <button  className="btn btn-danger" type="submit">Add</button>
       </form>
 {alltodo.map((todo=>
 <div className="todo-text" key={todo.id}> 
   {editTodo === todo.id ?( <input type="text" 
      value={editText} placeholder="Edit"

      onChange={(e)=>setEditText(e.target.value)} />)
      :( <div>{todo.text}</div>)}
      
       <button   className="btn-success  btns" onClick={()=>deleTodo(todo.id)}>X</button>
         <button className="btn-success  btns" onClick={()=>setEditTodo(todo.id)}>Edit</button>
         <button className="btn-success  btns" onClick={()=> saveTodo(todo.id)}>Save</button>
                    
 
                  
                 </div>
                 
              ))}
              
    </div>
  )
}

export default App;
