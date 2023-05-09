import { useState, useEffect } from 'react'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import AddTask from './components/AddTask';

import React from 'react'

const App = () => {
  // Getting Data from json

  // Fetch function
  const fetchTasks = async () =>
  {
    const resources = await fetch('http://localhost:5000/tasks')
    const mydata = await resources.json()
    return mydata
  }

  //useEffect

  useEffect( () => 
    {
      const getTasks = async () =>
      {
        const tasksFromServer = await fetchTasks()
        setTask(tasksFromServer)
      }
      getTasks()
    },
    []
  )



  // End of Getting data from json


  // Tasks state (array)
  const [tasks, setTask] = useState([])
  //End of Tasks state (array)



  // Show Add Task Section State 
  const [showAddTask, setShowAddTask] = useState(false)


  // End of Show Add Task Section State 



  // Add Task function
  const addTask = async (taskdetails) =>
  {
    // const id = Math.floor(Math.random() * 10000)
    // const newTask = {id, ...taskdetails}

    const resources = await fetch("http://localhost:5000/tasks", 
      {method : "POST",
      headers: {"Content-type" : "application/json"},
      body : JSON.stringify(taskdetails)
      }
    )

    const newTask = await resources.json()
    setTask([...tasks, newTask])

  }

  // End of Add Task function


  // Delete Task from json server function
  const deleteTask = async (id) => 
  {
    await fetch(`http://localhost:5000/tasks/${id}`, 
      {
        method : "DELETE",
      }
    
    )
    setTask(
      tasks.filter((task)=> task.id !== id)
    )
  }
  // End of Delete Task function

  // Toggle Reminder (Updating the json server)


    // Fetch a single task for update 
    const fetchSingleTask = async (id) =>
    {
      const resources = await fetch(`http://localhost:5000/tasks/${id}`)
      const singleTask = await resources.json()
      return singleTask
    }
    // End of Fetch a single task for update 
  

  const toggleReminder = async (id) => {

    // Updating which task to toggle on the server
    const taskToToggle = await fetchSingleTask(id)
    const updatedTask = { ...taskToToggle, reminder:!taskToToggle.reminder}

  
    const resource = await fetch(`http://localhost:5000/tasks/${id}`,
    {method : 'PUT',
    headers: {"Content-type" : "application/json"},
    body: JSON.stringify(updatedTask)
    }
    )

    const data = await resource.json()

    setTask(
      tasks.map((task) => task.id === id ? 
      { ...task, reminder : data.reminder} : task
    )
    ) 
    }

  // End of Toggle Reminder

  return (
    <div className="container">
      <Header onAdd = {() => setShowAddTask(!showAddTask)} propShowAdd = {showAddTask}/>
      {showAddTask && <AddTask onAdd = {addTask}/>}
      {tasks.length > 0 ?
      (
        <Tasks tasks = {tasks} onDelete = {deleteTask} onToggle = {toggleReminder}/>
      ) 
      : (<h3>No tasks to show</h3>)
      } 
      <Footer/>
    </div>
  )
}

export default App


