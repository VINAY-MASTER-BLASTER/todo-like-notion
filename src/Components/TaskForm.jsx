import {useState} from 'react'
import '../Components/TaskFrom.css'
import Tag from './Tag'
const TaskForm = () => {
  const [Taskdata,Settaskdata] = useState({
    Task : "",
    Status: "todo",
    Tags:[]
  })
  const CheckTag = (Tag) =>{
    return Taskdata.Tags.some(item => item === Tag)
  }
  const SelectTag = (Tag) =>{
    if(Taskdata.Tags.some(item => item === Tag)){
      const filtertag = Taskdata.Tags.filter(item => item !== Tag )
      Settaskdata((Prev) => {
        return {...Prev, Tags : filtertag}
      })
    }else{
      Settaskdata((Prev) => {
        return {...Prev, Tags:[...Prev.Tags, Tag]}
      })
    }
  }
  console.log(Taskdata.Tags)
  const handleChange = (e) =>{
    const {name,value} = e.target

    Settaskdata((prev) => {
      return {...prev, [name] :value}
    })
  }
  const handlesumit=(e)=>{
    e.preventDefault();
    console.log(Taskdata)
  }


  // const [task,settask] = useState("")
  // const [status,setstauste] = useState("ToDo")

  // const handleTaskChange = (e) =>{
  //   settask(e.target.value)
  // }
  // const handlestatuschange = (e) =>{
  //   setstauste(e.target.value)
  // }
  // console.log(task,status)

  return (
    <header className='app_header'>
        <form onSubmit={handlesumit}>
            <input type="text" className='task_input' name="Task" placeholder='Enter Your Task' onChange={handleChange}/>
            <div className='task_form_bottom_line'>
              <div>
                <Tag tagName="HTML" SelectTag={SelectTag} Selected={CheckTag("HTML")}/>
                <Tag tagName="CSS" SelectTag={SelectTag} Selected={CheckTag("CSS")}/>
                <Tag tagName="JavaScript" SelectTag={SelectTag} Selected={CheckTag("JavaScript")}/>
                <Tag tagName="React" SelectTag={SelectTag} Selected={CheckTag("React")}/>
                </div>
                <div>
                <select name="Status" className='task_status' onChange={handleChange}>
                    <option value="todo">To do</option>
                    <option value="doing">Doing</option>
                    <option value="done">Done</option>
                </select>
                <button type='sunbit' className='task_sumbit'>+ Add Task</button>
                </div>
            </div>
        </form>
    </header>
  )
}

export default TaskForm