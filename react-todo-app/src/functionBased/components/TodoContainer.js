import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

// Importing Components
import Header from "./Header";
import InputTodo from "./InputTodo";
import TodosList from "./TodosList";


const TodoContainer = () => {
    const [todos, setTodos] = useState(getInitialTodos())

    const handleChange = (id) => {
        // this.setState(prevState => {
        //     return {
        //         todos: prevState.todos.map(todo => {
        //             if (todo.id === id) {
        //                 return {
        //                     ...todo,
        //                     completed: !todo.completed,
        //                 }
        //             }
        //             return todo
        //         }),
        //     }
        // })

        setTodos(prevState =>
            prevState.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    }
                }
                return todo
            })
        )
    };

    const delTodo = (id) => {
        // this.setState({
        //     todos: [
        //         ...this.state.todos.filter(todo => {
        //             return todo.id !== id;
        //         })
        //     ]
        // });

        setTodos([
            ...todos.filter(todo => {
                return todo.id !== id
            }),
        ])
    };

    const addTodoItem = (title) => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
        }

        // this.setState({
        //     todos: [...this.state.todos, newTodo]
        // });

        setTodos([...todos, newTodo])
    };

    const setUpdate = (updatedTitle, id) => {
        // this.setState({
        //     todos: this.state.todos.map(todo => {
        //         if (todo.id === id) {
        //             todo.title = updatedTitle
        //         }
        //         return todo
        //     }),
        // })

        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.title = updatedTitle
                }
                return todo
            })
        )
    };

    // Mounting logic

    // useEffect(() => {
    //     console.log("test run")

    //     // Getting stored items
    //     const temp = localStorage.getItem("todos")
    //     const loadedTodos = JSON.parse(temp)
    //     if (loadedTodos) {
    //         // this.setState({
    //         //     todos: loadedTodos
    //         // })
    //         setTodos(loadedTodos)
    //     }
    // }, [setTodos])

    function getInitialTodos() {
        // Getting stored items
        const temp = localStorage.getItem("todos")
        const savedTodos = JSON.parse(temp)
        return savedTodos || []
    };

    useEffect(() => {
        // storing todos items
        const temp = JSON.stringify(todos)
        localStorage.setItem("todos", temp)
    }, [todos]);

    return (
        <div className="container">
            <div className="inner">
                <Header />
                <InputTodo
                    addTodoProps={addTodoItem}
                />
                <TodosList
                    todos={todos}
                    handleChangeProps={handleChange}
                    deleteTodoProps={delTodo}
                    setUpdate={setUpdate}
                />
            </div>
        </div>
    )
}
export default TodoContainer