import { useState } from "react";
import './App.css';

function App() {
  const [ task, setTask ] = useState({
    id: 0,
    taskDescription: "",
    isCompleted: false
  });
  const [ todos, setTodos ] = useState([]);
 
 function addTodos(e) {
   e.preventDefault();
   setTodos([
     ...todos,
     {
       id: todos.length + 1,
       taskDescription: task.taskDescription,
       isCompleted: false
     }
   ]);
 }

  return (
    <div className="App">
   
 <>
{todos.length > 0 ? (
<>...</>

 {todos.map((t, index) => {
   return (
     <div id={t.id} key={index + t.id} value={t.id}>

     {t.isCompleted ? (
       <strike>
        <p>{t.taskDescription}</p>
       </strike>
     ) : (
       <>
        <p>{t.taskDescription}</p>
        <button 
        id={t.id}
        key={index + t.id}
        value={t.id}
        onClick={ () => 
        console.log("clicked completed")}
        >
         complete
        </button>
        </>
        )}
        </div>
        );
        })}
      </>
   
    
  
   <h1>Todo List</h1>
    <form onSubmit={addTodos}>
     <div>
     <label>
      task 
      <input type="text"
      value={task.taskDescription}
      name="taskDescription"
      onChange={(event) => 
        setTask({
          id: 0,
          taskDescription: "",
          isCompleted: false
        })
      }
    />
  </label>
  <button>Add Todo</button>   
    </div>  
 </form>
 </div>


  );
}

export default App;
