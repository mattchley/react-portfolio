import React from "react";
import BodyContainer from "../Components/BodyContainer"
import Container from '@material-ui/core/Container';
import GitFeed from '../Components/GitFeed'


function About() {
    return (
        <Container>
            <h1 style={{ color: "red" }}>About Me!</h1>
            <BodyContainer />
        <GitFeed />
        </Container>
    )
}

export default About