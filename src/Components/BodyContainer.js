import React from "react";
import MattProfile from "../Images/ProfilePic/profile.jpg"
import Container from '@material-ui/core/Container';


function BodyContainer() {
    return (
        <Container maxWidth="sm">
            <h1 style={{ color: "red" }}>About Me!</h1>
            <img src={MattProfile}></img>
            <div style={{ backgroundColor: "lightblue" }}>
                <p>Front End Developer with a background in Anthropology and Customer Service wanting to create a more informed and accommodating UI for the web. Recently secured a certificate for Full Stack Development from UCSD, with the skills to work with JavaScript, React.js, CSS, MongoDB and SQL. Have several projects under my belt; Ranging from simple employee DBs to a group application that blended drug interactions with timer for when they take their prescriptions, with several more in the pipeline. Going into every project, I want the client to get the information they desire along with a little more that will send them out with a better sense of understanding. I am passionate about growing my skill set to allow me to connect with the client in a way they never thought they wanted.</p>
            </div>
        </Container>

    )
}

export default BodyContainer