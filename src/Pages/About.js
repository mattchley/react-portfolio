import React from "react";
import BodyContainer from "../Components/BodyContainer"
import Container from '@material-ui/core/Container';
import Tester from '../Components/tester'
import GitFeed from '../Components/GitFeed'

function About() {
    return (
        <Container>
            <h1 style={{ color: "red" }}>About Me!</h1>
            <BodyContainer />
        {/* <Tester /> this will hopefully be used to figure out how to sort at the same time as a use state*/ }
        <GitFeed />
        </Container>
    )
}

export default About