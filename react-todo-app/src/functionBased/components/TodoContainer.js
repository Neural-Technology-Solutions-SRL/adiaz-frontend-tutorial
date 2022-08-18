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

    const handleChange = async (id) => {
        const newTodo = { completed: false };

        todos.forEach((todo) => {
          if (todo.id === id) {
            newTodo.completed = !todo.completed;
          }
        });

        const url = `https://localhost:7202/Todo/completed/${id}`;
        const response = await fetch(url, {
          method: "PUT",
          body: JSON.stringify(newTodo),
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.status === 200) {
          const resJson = await response.json();

          setTodos((prevState) =>
            prevState.map((todo) => {
              if (todo.id === id) {
                return {
                  ...todo,
                  completed: resJson.completed,
                };
              }
              return todo;
            })
          );
        } else {
          alert(
            "We could not update the title of your task.\nPlease contact your administrator..."
          );
        }

    };

    const delTodo = async (id) => {
        const url = `https://localhost:7202/Todo/${id}`
        const response = await fetch(
            url, {
                method: 'DELETE'
            })
        
        if (response.status === 200) {
            setTodos([
                ...todos.filter(todo => {
                    return todo.id !== id
                }),
            ])
            
        } else {
            alert("Task not found.\nPlease contact your administrator...")
        }

    };

    const addTodoItem = async (title) => {
        const newTodo = {
            title: title,
        }
        const url = "https://localhost:7202/Todo"
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
            setTodos([...todos, resJson])
        } else { 
            alert("We could not add your task to the list.\nPlease contact your administrator...") 
        }
    };

    const setUpdate = async (updatedTitle, id) => {
        const newTodo = {
            title: updatedTitle,
        }
        const url = `https://localhost:7202/Todo/title/${id}`
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
            setTodos(
                todos.map(todo => {
                    if (todo.id === id) {
                        todo.title = resJson.title
                    }
                    return todo
                })
            )
        } else { 
            alert("We could not update the title of your task.\nPlease contact your administrator...") 
        }
    };

    const fetchTodos = async() => {
        const url = "https://localhost:7202/Todo/"
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