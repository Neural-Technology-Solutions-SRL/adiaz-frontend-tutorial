import React, { useState } from "react"

// Importing icons
import { IconContext } from "react-icons"
import { FaPlusCircle } from "react-icons/fa"


const InputTodo = (props) => {
    // console.log(useState("Hello"))

    /*
    The hook needs to be use at the beginning of the 
    component and outside of any loop or others function 
    to ensure the hooks visibility on each render...
    */

    //const [title, setTitle] = useState("hello")
    const [inputText, setInputText] = useState({
        title: "",
    })

    const onChange = (e) => {
        // setTitle(e.target.value)
        setInputText({
            ...inputText,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (inputText.title.trim()) {
            props.addTodoProps(inputText.title)
            setInputText({
                title: "",
            })
        } else {
            alert("Please write item")
        }
    }

    // returning the component
    return (
        <form onSubmit={handleSubmit} className="form-container">
            <input
                type="text"
                className="input-text"
                placeholder="Add todo..."
                value={inputText.title}
                name="title"
                onChange={onChange}
            />
            <IconContext.Provider value={{
                    color: "darkcyan",
                    style: { fontSize: "20px", color: "#ff0000" },
                    className: "submit-iconn",
            }}>
            <button className="input-submit">
                {/* 
                <FaPlusCircle style={{ 
                    color: "darkcyan", 
                    fontSize: "20px", 
                    marginTop: "2px" 
                }} /> 
                */}
                <FaPlusCircle />
            </button>
            </IconContext.Provider>
        </form>
    )
}
export default InputTodo