import React from "react";

// Importing Components
import TodoItem from "./TodoItem";

const TodosList = (props) => {
    return (
        <ul>
            {props.todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    handleChangeProps={props.handleChangeProps}
                    deleteTodoProps={props.deleteTodoProps}
                    setUpdate={props.setUpdate}
                    waitUpdate={props.waitUpdate}
                />
            ))}
        </ul>
    )
}
export default TodosList