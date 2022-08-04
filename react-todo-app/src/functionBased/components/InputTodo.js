import React, { useState } from "react"

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
            <button className="input-submit">
                Submit
            </button>
        </form>
    )
}

export default InputTodo

// import React, { useState } from "react"

// const InputTodo = props => {
//   const [inputText, setInputText] = useState({
//     fName: "",
//     lName: "",
//   })

//   const onChange = e => {
//     setInputText(prevState => {
//         return {
//             ...inputText,
//             [e.target.name]: e.target.value,
//         }
//     })
//   }

//   const handleSubmit = e => {
//     e.preventDefault()
//     console.log("submitted")
//   }

//   return (
//     <>
//       <form onSubmit={handleSubmit} className="form-container">
//         <input
//           type="text"
//           className="input-text"
//           placeholder="Add first name"
//           value={inputText.fName}
//           name="fName"
//           onChange={onChange}
//         />
//         <input
//           type="text"
//           className="input-text"
//           placeholder="Add last name"
//           value={inputText.lName}
//           name="lastName"
//           onChange={onChange}
//         />

//         <button className="input-submit">Submit</button>
//       </form>
//       <h2>{inputText.fName}</h2>
//       <h2>{inputText.lastName}</h2>
//     </>
//   )
// }

// export default InputTodo