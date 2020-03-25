import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



function NavBar() {

    return (
        <div>
            <nav>
                <div>Matthew Atchley</div>

                <div>
                    <ul>
                        <li id="aboutTab">
                            <Link
                                className="link" to="/"
                            > About </Link></li>
                        <li id="projectsTab">
                            <Link
                                className="link" to="/projects"
                            > Projects </Link></li>
                        <li id="resumeTab">
                            <Link
                                className="link" to="/contact"
                            > Resume </Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;