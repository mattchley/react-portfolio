import React from 'react';
import NavBar from './Navbar';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from '../Pages/About';
import Projects from '../Pages/Projects';
import Contact from '../Pages/Contact';
import Resume from '../Pages/Resume';

function MainContainer() {
    return (
        <div>
            <Router>
                <NavBar />
                <div>
                    <Switch>
                        <Route exact path="/">
                            <About />
                        </Route>

                        <Route path="/projects">
                            <Projects />
                        </Route>
                        
                        <Route path="/contact">
                            <Contact />
                        </Route>

                        <Route path="/resume">
                            <Resume />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default MainContainer;