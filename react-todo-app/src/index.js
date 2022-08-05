import React from "react";
import ReactDOM from "react-dom";
import { HashRouter  as Router } from "react-router-dom"

// Importing Components
import TodoContainer from "./functionBased/components/TodoContainer";

// Importing Stylesheet
import "./functionBased/App.css";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <TodoContainer />
        </Router>
    </React.StrictMode>, 
    document.getElementById("root")
)