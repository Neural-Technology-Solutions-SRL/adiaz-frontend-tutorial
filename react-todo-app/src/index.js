import React from "react";
import ReactDOM from "react-dom";

// Importing Components
import TodoContainer from "./functionBased/components/TodoContainer";

// Importing Stylesheet
import "./functionBased/App.css";

ReactDOM.render(
        <React.StrictMode>
            <TodoContainer />
        </React.StrictMode>
    , document.getElementById("root"))