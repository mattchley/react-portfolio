import React from "react";
import BodyContainer from "../Components/BodyContainer"
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import GitFeed from '../Components/GitFeed'


function About() {
    return (
        <Container>
            <h1>About Me!</h1>
            <Grid container spacing={3} justify={"space-evenly"}>
                <Grid item xs={12} md={6}>
                    <BodyContainer />
                </Grid>
                <Grid item xs={12} md={6}>
                    <GitFeed />
                </Grid>
            </Grid>

        </Container>
    )
}

export default About