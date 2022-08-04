import React, { useState, useEffect } from "react";

// Import styles
import styles from "./TodoItem.module.css"

const TodoItem = (props) => {
    // state = {
    //     editing: false,
    // }
    const [editing, setEditing] = useState(false)

    // handleEditing = () => {
    //     // console.log("edit mode activated")
    //     this.setState({
    //         editing: true
    //     })
    // }
    const handleEditing = () => {
        setEditing(true)
    }

    // handleUpdatedDone = (event) => {
    //     // console.log(event.key)
    //     if (event.key === "Enter") {
    //         this.setState({ editing: false })
    //     }
    // }
    const handleUpdatedDone = (event) => {
        if (event.key === "Enter") {
            setEditing(false)
        }
    }

    // Set styles with a js object
    // const completedStyle = {
    //     fontStyle: "italic",
    //     color: "#595959",
    //     opacity: 0.4,
    //     textDecoration: "line-through",
    // }
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

    // if (this.state.editing) {
    if (editing) {
        viewMode.display = "none"
    } else {
        editMode.display = "none"
    }

    // componentWillUnmount() {
    //     console.log("Cleaning up...")
    // }
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
                <button onClick={() => props.deleteTodoProps(id)}>Delete</button>
                <span style={completed ? completedStyle : null}>{title}</span>
            </div>
            <input
                type="text"
                style={editMode}
                className={styles.textInput}
                value={title}
                onChange={e => {
                    props.setUpdate(e.target.value, id)
                }}
                onKeyDown={handleUpdatedDone}
            />
        </li>
    )
}
export default TodoItem

