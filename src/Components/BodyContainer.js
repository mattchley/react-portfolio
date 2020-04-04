import React from "react";
import MattProfile from "../Images/ProfilePic/profile.jpg"
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';


function BodyContainer() {

    return (
        <Container maxWidth="lg">
            <Grid container spacing={0} justify={"space-evenly"}>
                <Grid item xs={12} md={3}>
                    <img src={MattProfile} alt="Matthew Atchley" style={{ maxHeight: "340px", maxWidth: "300px", textAlign: "center" }}></img>
                </Grid>
                <Grid item xs={12} md={9} style={{ backgroundColor: "lightblue" }}>
                    <p>Front End Developer with a background in Anthropology and Customer Service wanting to create a more informed and accommodating UI for the web. Recently secured a certificate for Full Stack Development from UCSD, with the skills to work with JavaScript, React.js, CSS, MongoDB and SQL. Have several projects under my belt; Ranging from simple employee DBs to a group application that blended drug interactions with timer for when they take their prescriptions, with several more in the pipeline. Going into every project, I want the client to get the information they desire along with a little more that will send them out with a better sense of understanding. I am passionate about growing my skill set to allow me to connect with the client in a way they never thought they wanted.</p>
                    {/* Make this a modal or link to the contact page? */}
                    <h2>Email: mattchley@gmail.com</h2>
                    <Grid>
                        <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                            <Button href="https://github.com/mattchley">GitHub Profile</Button>
                            <Button href="https://www.linkedin.com/in/matthew-atchley-977238190/">LinkedIN Profile</Button>
                        </ButtonGroup>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default BodyContainer