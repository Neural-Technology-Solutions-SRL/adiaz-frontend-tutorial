import React from "react";
import ReactDOM from "react-dom";

// Importing Components
import TodoContainer from "./components/TodoContainer";

// Importing Stylesheet
import "./App.css";

ReactDOM.render(
        <React.StrictMode>
            <TodoContainer />
        </React.StrictMode>
    , document.getElementById("root"))