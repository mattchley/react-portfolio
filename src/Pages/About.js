import React from "react";
import BodyContainer from "../Components/BodyContainer"
import Container from '@material-ui/core/Container';

function About() {
    return (
        <Container>
            <h1 style={{ color: "red" }}>About Me!</h1>
            <BodyContainer />
        </Container>
    )
}

export default About