import React from "react";

// Importing Components
import TodoItem from "./TodoItem";

class TodosList extends React.Component {
    render() {
        return (
            <ul>
                {
                    this.props.todos.map(todo => (
                        <TodoItem 
                            key={todo.id}
                            todo={todo}
                            handleChangeProps={this.props.handleChangeProps}
                            deleteTodoProps={this.props.deleteTodoProps}
                            setUpdate={this.props.setUpdate}
                        />
                        //<li key={todo.id}>{todo.title}</li>
                    ))
                }
            </ul>
        )
    }
}

export default TodosList