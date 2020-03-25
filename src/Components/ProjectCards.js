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
                        <h2>Node.js SQL EmployeeDB</h2>
                        <img src={EmployDB} alt="Node.js SQL EmployeeDB" style={{ maxHeight: "340px", maxWidth: "300px" }}></img>
                        <p>Description of the project goes here!</p>
                    </Paper>
                    <Paper >
                        <h2>Social Ear SocialEarPiece</h2>
                        <img src={SocialEarPiece} alt="Social Ear SocialEarPiece" style={{ maxHeight: "340px", maxWidth: "300px" }}></img>
                        <p>Description of the project goes here!</p>
                    </Paper>
                    <Paper >
                        <h2>Druggler</h2>
                        <img src={Druggler} alt="Druggler" style={{ maxHeight: "340px", maxWidth: "300px" }}></img>
                        <p>Description of the project goes here!</p>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper >
                        <h2>Movie Meme Mash</h2>
                        <img src={MovieMeme} alt="Movie Meme Mash" style={{ maxHeight: "340px", maxWidth: "300px" }}></img>
                        <p>Description of the project goes here!</p>
                    </Paper>
                    <Paper >
                        <h2>Weather App</h2>
                        <img src={WrkOut}  alt="Weather App" style={{ maxHeight: "340px", maxWidth: "300px" }}></img>
                        <p>Description of the project goes here!</p>
                    </Paper>
                    <Paper >
                        <h2>Node.js GitHub Profile Generator</h2>
                        <img src={BdgtTrker} alt="Node.js GitHub Profile Generator" style={{ maxHeight: "340px", maxWidth: "300px" }}></img>
                        <p>Description of the project goes here!</p>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}

export default ProjectCard