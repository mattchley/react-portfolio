import React from "react";
import EmployDB from "../Images/ProjectPics/EmployeeDB.png";
import SocialEarPiece from "../Images/ProjectPics/SocialEarPiece.png";
import Druggler from "../Images/ProjectPics/Druggler/DrugglerLogin.jpg";
import MovieMeme from "../Images/ProjectPics/Movie-Meme-Mash.png";
import WrkOut from "../Images/ProjectPics/WrkOutTrkr.png";
import BdgtTrker from "../Images/ProjectPics/BudgetTrckrOFF.png";
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

function ProjectCard() {
    return (
        <Container maxWidth="lg">
            <Grid container spacing={1} justify={'center'}>
                <Grid item xs={12} sm={8}>
                    <Grid>
                        <Paper >
                            <h2>Druggler</h2>
                            <img src={Druggler} alt="Druggler" style={{ maxHeight: "340px"}} ></img>
                            <p>Tracks drug interactions and times to take medication.</p>
                        </Paper>
                    </Grid>
                    <Grid>
                        <Paper >
                            <h2>Movie Meme Mash</h2>
                            <img src={MovieMeme} alt="Movie Meme Mash" style={{ maxHeight: "340px"}} ></img>
                            <p>Simple movie review app where the client logs in and leaves a comment and gif as a review.</p>
                        </Paper>
                    </Grid>
                    <Grid>
                        <Paper >
                            <h2>Node.js SQL EmployeeDB</h2>
                            <img src={EmployDB} alt="Node.js SQL EmployeeDB" style={{ maxHeight: "340px"}} ></img>
                            <p>Node Js and SQL app that tracks employees by department.</p>
                        </Paper>
                    </Grid>
                    <Grid>
                        <Paper >
                            <h2>Social Ear Piece</h2>
                            <img src={SocialEarPiece} alt="Social Ear Piece" style={{ maxHeight: "340px"}} ></img>
                            <p>Supply of funny lines and interesting quotes.</p>
                        </Paper>
                    </Grid>
                    <Grid>
                        <Paper >
                            <h2>WrkOutTrkr</h2>
                            <img src={WrkOut} alt="WrkOutTrkr" style={{ maxHeight: "340px"}} ></img>
                            <p>MongoDB based work out tracker.</p>
                        </Paper>
                    </Grid>
                    <Grid>
                        <Paper >
                            <h2>Node.js GitHub Profile Generator</h2>
                            <img src={BdgtTrker} alt="Node.js GitHub Profile Generator" style={{ maxHeight: "340px", maxWidth: "300px" }} ></img>
                            <p>Simple PDF Generator based on GitHub user data</p>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Container>

    )
}

export default ProjectCard
