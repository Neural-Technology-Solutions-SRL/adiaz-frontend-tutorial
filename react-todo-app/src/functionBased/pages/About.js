import React from "react"
import { Link, Route, Routes  } from "react-router-dom"

// Importing component
import SinglePage from "./SinglePages"

const About = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to={`about-app`}>About App</Link>
                </li>
                <li>
                    <Link to={`about-author`}>About Author</Link>
                </li>
            </ul>

            <Routes>
                <Route path={`:slug`} element={ <SinglePage /> } />
            </Routes>
            
        </div>
    )
}
export default About