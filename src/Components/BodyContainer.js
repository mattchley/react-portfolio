import React from "react";
import MattProfile from "../Images/ProfilePic/profile.jpg"
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Card, CardContent } from "@material-ui/core";


function BodyContainer() {

    return (

        <Card variant="outlined">
            <CardContent>
                <Container maxWidth="lg" style={{ padding: '39px' }}>
                    <Grid container spacing={0} justify={"space-evenly"}>
                        <Grid item xs={12}
                        // s={12} md={4} lg={3} xl={3}  
                        >
                            <img src={MattProfile} alt="Matthew Atchley" style={{
                                maxHeight: "340px", maxWidth: "300px", marginLeft: "auto", marginRight: "auto", display: "block", padding: "15.1px", borderBottom: "3px solid #ddd"
                            }}></img>
                        </Grid>
                        <Grid item xs={12}
                        // s={12} md={8} lg={9} xl={9}  
                        >
                            <p style={{ padding: "15.1px" }}>Front End Developer with a background in Anthropology and Customer Service wanting to create a more informed and accommodating UI for the web. Recently secured a certificate for Full Stack Development from UCSD, with the skills to work with JavaScript, React.js, CSS, MongoDB and SQL. Have several projects under my belt; Ranging from simple employee DBs to a group application that blended drug interactions with timer for when they take their prescriptions, with several more in the pipeline. Going into every project, I want the client to get the information they desire along with a little more that will send them out with a better sense of understanding. I am passionate about growing my skill set to allow me to connect with the client in a way they never thought they wanted.</p>

                        </Grid>
                        <Grid item xs={12}
                        // s={12} md={9} lg={9} xl={9} 
                        >
                            <ButtonGroup variant="contained" color="inherit" aria-label="contained primary button group" fullWidth="true">
                                <Button href="https://github.com/mattchley">GitHub Profile</Button>
                                <Button href="https://www.linkedin.com/in/matthew-atchley-977238190/">LinkedIN Profile</Button>
                            </ButtonGroup>
                        </Grid>
                    </Grid>
                </Container>
            </CardContent>
        </Card>


    )
}

export default BodyContainer