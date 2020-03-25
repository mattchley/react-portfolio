import React from "react";
import EmployDB from "../Images/ProjectPics/EmployeeDB.png";
import SocialEarPiece from "../Images/ProjectPics/SocialEarPiece.png";
import Druggler from "../Images/ProjectPics/Druggler.png";
import MovieMeme from "../Images/ProjectPics/Movie-Meme-Mash.png";
import WrkOut from "../Images/ProjectPics/WrkOutTrkrOFF.png";
import BdgtTrker from "../Images/ProjectPics/BudgetTrckrOFF.png";
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

function ProjectCard() {
    return (
        <Container maxWidth="lg">
            <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                    <Paper >
                        <h1>Node.js SQL EmployeeDB</h1>
                        <img src={EmployDB} style={{ maxHeight: "340px", maxWidth: "300px" }}></img>
                        <p>Description of the project goes here!</p>
                    </Paper>
                    <Paper >
                        <h1>Social Ear SocialEarPiece</h1>
                        <img src={SocialEarPiece} style={{ maxHeight: "340px", maxWidth: "300px" }}></img>
                        <p>Description of the project goes here!</p>
                    </Paper>
                    <Paper >
                        <h1>Druggle</h1>
                        <img src={Druggler} style={{ maxHeight: "340px", maxWidth: "300px" }}></img>
                        <p>Description of the project goes here!</p>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper >
                        <h1>Movie Meme Mash</h1>
                        <img src={MovieMeme} style={{ maxHeight: "340px", maxWidth: "300px" }}></img>
                        <p>Description of the project goes here!</p>
                    </Paper>
                    <Paper >
                        <h1>MongoDB PWA Work Out Tracker</h1>
                        <img src={WrkOut} style={{ maxHeight: "340px", maxWidth: "300px" }}></img>
                        <p>Description of the project goes here!</p>
                    </Paper>
                    <Paper >
                        <h1>PWA Budget Tracker</h1>
                        <img src={BdgtTrker} style={{ maxHeight: "340px", maxWidth: "300px" }}></img>
                        <p>Description of the project goes here!</p>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}

export default ProjectCard