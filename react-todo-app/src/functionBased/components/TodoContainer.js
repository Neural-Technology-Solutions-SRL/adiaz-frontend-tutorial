import React, { useState, useEffect } from "react";
//import { v4 as uuidv4 } from "uuid";
import { Routes, Route } from "react-router-dom";

// Importing Components
import Header from "./Header";
import InputTodo from "./InputTodo";
import TodosList from "./TodosList";
import Navbar from "./Navbar";

// Importing pages
import About from "../pages/About";
import NotMatch from "../pages/NotMatch";


const TodoContainer = () => {
    const [todos, setTodos] = useState([])
    const generalUrl = 'https://adiaz-todo-app.azurewebsites.net/Todo'

    const handleChange = async (completedchange, id) => {
        const newTodo = { completed: completedchange };

        const url = `${generalUrl}/${id}/completed`;
        const response = await fetch(url, {
          method: "PUT",
          body: JSON.stringify(newTodo),
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.status === 200) {
            const resJson = await response.json()
            setTodos(resJson)
        } else {
          alert(
            "We could not update the title of your task.\nPlease contact your administrator..."
          );
        }

    };

    const delTodo = async (id) => {
        const url = `${generalUrl}/${id}`
        const response = await fetch(
            url, {
                method: 'DELETE'
            })
        
        if (response.status === 200) {
            const resJson = await response.json()
            setTodos(resJson)
        } else {
            alert("Task not found.\nPlease contact your administrator...")
        }

    };

    const addTodoItem = async (title) => {
        const newTodo = {
            title: title,
        }
        const url = `${generalUrl}`
        const response = await fetch(
            url, {
                method: 'POST', 
                body: JSON.stringify(newTodo),   
                headers:{
                    'Content-Type': 'application/json'
                }
            })
        if (response.status === 200) {
            const resJson = await response.json()
            setTodos(resJson)
        } else { 
            alert("We could not add your task to the list.\nPlease contact your administrator...") 
        }
    };

    const setUpdate = async (updatedTitle, id) => {
        const newTodo = {
            title: updatedTitle,
        }
        const url = `${generalUrl}/${id}/title`
        const response = await fetch(
            url, {
                method: 'PUT', 
                body: JSON.stringify(newTodo),   
                headers:{
                    'Content-Type': 'application/json'
                }
            })
        if (response.status === 200) {
            const resJson = await response.json()
            setTodos(resJson)
        } else { 
            alert("We could not update the title of your task.\nPlease contact your administrator...") 
        }
    };

    const waitUpdate = async (updatedTitle, id) => {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.title = updatedTitle
                }
                return todo
            })
        )
    }

    const fetchTodos = async() => {
        const url = `${generalUrl}`
        const method = 'GET'
        const response = await fetch(url, {method: method})
        const resJson = await response.json()
        //console.log(resJson)
        setTodos(resJson)
    }

    useEffect(() => {
        // managing all todos
        fetchTodos()
    },[]);

    return (
        <>
            <Navbar />
            <Routes>
                <Route exact path="/" element= {
                    <div className="container">
                        <div className="inner">
                            <Header />
                            <InputTodo addTodoProps={addTodoItem} />
                            <TodosList
                                todos={todos}
                                handleChangeProps={handleChange}
                                deleteTodoProps={delTodo}
                                setUpdate={setUpdate}
                                waitUpdate={waitUpdate}
                            />
                        </div>
                    </div>
                } />
                <Route path="about/*" element={ <About /> } />
                <Route path="*" element={ <NotMatch /> } />
            </Routes>
        </>
    )
}
export default TodoContainer