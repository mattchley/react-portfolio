import React from "react";
import BodyContainer from "../Components/BodyContainer"
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

function About() {
    return (
        <div>
            <BodyContainer />
            <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                <Button href="https://github.com/mattchley">GitHub Profile</Button>
                <Button href="https://www.linkedin.com/in/matthew-atchley-977238190/">LinkedIN Profile</Button>
            </ButtonGroup>
        </div>
    )
}

export default About