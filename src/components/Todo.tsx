import { useState } from "react"

interface Todo{
  id:Number,
  task:String,
  complete:Boolean
}

function Todo():JSX.Element {
  const[task,setTask]=useState<string>("")
  let [todo,setTodo]=useState<Todo[]>([])

  const handleSubmit=(e:React.FormEvent<HTMLFormElement>): void=>{
    e.preventDefault()


// console.log(newTask);

    let allTodo:Todo={id:Math.random(),task,complete:false}
    
    setTodo([...todo,allTodo])
    setTask('')
  }

  const handleDelete=(e:Number)=>{

   let deleteTodo= todo.filter((val)=>val.id!==e)

    setTodo(deleteTodo)

  }


  console.log(todo);
  return (
    <div className="h-screen flex content-center justify-center items-center bg-backgroundClr">
      <section className="h-[500px] w-[700px] bg-boxcolor rounded-lg">
        <form onSubmit={handleSubmit} className="flex content-center justify-center items-center my-20">
          <input required onChange={(e)=>setTask(e.target.value)} className="h-12 w-72 placeholder-black bg-backgroundClr mx-2" type="text" placeholder="New Todo"/>
          <button type="submit" className=" bg-slate-600 text-white px-4 py-2 rounded-full">Submit</button>
        </form>
        <div className="flex content-center justify-center items-center">
          <ul>

            {
              todo.map((e,idx)=> <li key={idx}  className="flex content-center justify-between px-4 my-2 items-center h-12 w-96 placeholder-black bg-backgroundClr">
              <span>{e.task}
              </span>
              <section>
              <button className="bg-green-700 text-white px-3 py-1 rounded-full mx-2">Edit</button>
              <button onClick={()=>handleDelete(e.id)} className="bg-red-700 text-white px-3 py-1 rounded-full ">Delete</button>
              </section>
              
            </li>)
            }
           
          
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Todo