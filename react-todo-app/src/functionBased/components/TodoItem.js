import React, { useState, useEffect } from "react";

// Import styles
import styles from "./TodoItem.module.css"

// Importing icons
import { FaTrash } from "react-icons/fa"

const TodoItem = (props) => {
    const [editing, setEditing] = useState(false)

    const handleEditing = () => {
        setEditing(true)
    }

    const handleUpdatedDone = (event) => {
        if (event.key === "Enter") {
            setEditing(false)
        }
    }

    const completedStyle = {
        fontStyle: "italic",
        color: "#595959",
        opacity: 0.4,
        textDecoration: "line-through",
    }

    // Destructuring the todo object
    // const { id, title, completed } = this.props.todo
    const { completed, id, title } = props.todo

    // Toggling the input for editing the todos
    let viewMode = {}
    let editMode = {}

    if (editing) {
        viewMode.display = "none"
    } else {
        editMode.display = "none"
    }

    useEffect(() => {
        return () => {
            console.log("Cleaning up")
        }
    }, [])


    return (
        <li className={styles.item}>
            <div onDoubleClick={handleEditing} style={viewMode}>
                <input
                    type="checkbox"
                    className={styles.checkbox}
                    checked={completed}
                    onChange={() => props.handleChangeProps(id)}
                />
                <button className="input-trash" onClick={() => props.deleteTodoProps(id)} >
                    <FaTrash style={{
                        color: "orangered", 
                        fontSize: "16px"
                    }} />
                </button>
                <span style={completed ? completedStyle : null}>{title}</span>
            </div>
            <input
                type="text"
                style={editMode}
                className={styles.textInput}
                value={title}
                onChange={e => { props.setUpdate(e.target.value, id) }}
                onKeyDown={handleUpdatedDone}
            />
        </li>
    )
}
export default TodoItem

