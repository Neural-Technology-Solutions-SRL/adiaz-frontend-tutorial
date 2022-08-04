import React from "react"

// Importing Styles
import styles from "./TodoItem.module.css"

class TodoItem extends React.Component {
    state = {
        editing: false,
    }

    handleEditing = () => {
        // console.log("edit mode activated")
        this.setState({
            editing: true
        })
    }

    handleUpdatedDone = (event) => {
        // console.log(event.key)
        if (event.key === "Enter") {
            this.setState({ editing: false })
        }
    }

    componentWillUnmount() {
        console.log("Cleaning up...")
    }

    render() {
        // Set styles with a js object
        const completedStyle = {
            fontStyle: "italic",
            color: "#595959",
            opacity: 0.4,
            textDecoration: "line-through",
        }

        // Destructuring the todo object
        const { id, title, completed } = this.props.todo

        // Toggling the input for editing the todos
        let viewMode = {}
        let editMode = {}

        if (this.state.editing) {
            viewMode.display = "none"
        } else {
            editMode.display = "none"
        }

        return (
            <li className={styles.item}>
                <div onDoubleClick={this.handleEditing} style={viewMode}>
                    <input
                        type="checkbox"
                        className={styles.checkbox}
                        checked={completed}
                        onChange={() =>
                            this.props.handleChangeProps(id)
                            /*console.log("task #" + (id) + " has been clicked")*/
                        }
                    />

                    <button
                        onClick={
                            () => this.props.deleteTodoProps(id)
                        }
                    >
                        Delete
                    </button>
                    <span style={completed ? completedStyle : null}>
                        {title}
                    </span>
                </div>
                <input
                    type="text"
                    style={editMode}
                    className={styles.textInput}
                    value={title}
                    onChange={e => {
                        // console.log(e.target.value, id)
                        this.props.setUpdate(e.target.value, id)
                    }}
                    onKeyDown={this.handleUpdatedDone}
                />
            </li>

        )
    }
}

// function TodoItem(props) {
//     return <li>{props.todo.title}</li>
// }

export default TodoItem