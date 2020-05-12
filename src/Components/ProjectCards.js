import React from "react";
import EmployDB from "../Images/ProjectPics/EmployeeDB.png";
import SocialEarPiece from "../Images/ProjectPics/SocialEarPiece.png";
import Druggler from "../Images/ProjectPics/Druggler/DrugglerLogin.jpg";
import MovieMeme from "../Images/ProjectPics/Movie-Meme-Mash.png";
import WrkOut from "../Images/ProjectPics/WrkOutTrkr.png";
import BdgtTrker from "../Images/ProjectPics/BudgetTrckrOFF.png";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';



function ProjectCard() {
    return (
        <Container maxWidth="lg">
            <Grid container spacing={1} justify={'center'}>
                <Grid item xs={12} sm={8}>
                    <Grid>
                        <Card variant="outlined">
                            <CardContent>
                                <h2>Druggler</h2>
                                <Grid container spacing={1} justify={'center'}>
                                    <img src={Druggler} alt="Druggler" style={{ maxHeight: "340px" }} ></img>
                                </Grid>
                                <br />
                                <p>Tracks drug interactions and times to take medication.</p>
                                <Grid container spacing={1} justify={'center'}>
                                    <a href="https://github.com/mattchley/Druggler"><img src="https://img.icons8.com/ios-glyphs/60/000000/github.png" /></a>
                                    <a href="https://druggler.herokuapp.com/"><img src="https://img.icons8.com/ios/50/000000/heroku.png" /></a>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid>
                        <Card variant="outlined">
                            <CardContent>
                                <h2>Movie Meme Mash</h2>
                                <Grid container spacing={1} justify={'center'}>
                                    <img src={MovieMeme} alt="Movie Meme Mash" style={{ maxHeight: "340px" }} ></img>
                                </Grid>
                                <br />
                                <p>Simple movie review app where the client logs in and leaves a comment and gif as a review.</p>
                                <Grid container spacing={1} justify={'center'}>
                                    <a href="https://github.com/mattchley/Movie-Meme-Mash"><img src="https://img.icons8.com/ios-glyphs/60/000000/github.png" /></a>
                                    <a href="https://test-memms.herokuapp.com/"><img src="https://img.icons8.com/ios/50/000000/heroku.png" /></a>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid>
                        <Card variant="outlined">
                            <CardContent>
                                <h2>Node.js SQL EmployeeDB</h2>
                                <Grid container spacing={1} justify={'center'}>
                                    <img src={EmployDB} alt="Node.js SQL EmployeeDB" style={{ maxHeight: "340px" }} ></img>
                                </Grid>
                                <br />
                                <p>Node Js and SQL app that tracks employees by department.</p>
                                <Grid container spacing={1} justify={'center'}>
                                    <a href="https://github.com/mattchley/Employee_Summary"><img src="https://img.icons8.com/ios-glyphs/60/000000/github.png" /></a>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid>
                        <Card variant="outlined">
                            <CardContent>
                                <h2>Social Ear Piece</h2>
                                <Grid container spacing={1} justify={'center'}>
                                    <img src={SocialEarPiece} alt="Social Ear Piece" style={{ maxHeight: "340px" }} ></img>
                                </Grid>
                                <br />
                                <p>Supply of funny lines and interesting quotes.</p>
                                <Grid container spacing={1} justify={'center'}>
                                    <a href="https://github.com/Louis100X/Social_Ear_Whisper"><img src="https://img.icons8.com/ios-glyphs/60/000000/github.png" /></a>
                                    <a href="https://social-ear-whisper.herokuapp.com/"><img src="https://img.icons8.com/ios/50/000000/heroku.png" /></a>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid >
                    <Grid>
                        <Card variant="outlined">
                            <CardContent>
                                <h2>WrkOutTrkr</h2>
                                <Grid container spacing={1} justify={'center'}>
                                    <img src={WrkOut} alt="WrkOutTrkr" style={{ maxHeight: "340px" }} ></img>
                                </Grid>
                                <br />
                                <p>MongoDB based work out tracker.</p>
                                <Grid container spacing={1} justify={'center'}>
                                    <a href="https://github.com/mattchley/WrkOutTrkr"><img src="https://img.icons8.com/ios-glyphs/60/000000/github.png" /></a>
                                    <a href="https://wrkouttrkr.herokuapp.com/"><img src="https://img.icons8.com/ios/50/000000/heroku.png" /></a>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid >
                    <Grid>
                        <Card variant="outlined">
                            <CardContent>
                                <h2>Node.js GitHub Profile Generator</h2>
                                <Grid container spacing={1} justify={'center'}>
                                    <img src={BdgtTrker} alt="Node.js GitHub Profile Generator" style={{ maxHeight: "340px", maxWidth: "300px" }} ></img>
                                </Grid>
                                <br />
                                <p>Simple PDF Generator based on GitHub user data</p>
                                <Grid container spacing={1} justify={'center'}>

                                    <a href="https://github.com/mattchley/GitHubeNodeProfile"><img src="https://img.icons8.com/ios-glyphs/60/000000/github.png" /></a>

                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid >
                </Grid >
            </Grid >
        </Container >

    )
}

export default ProjectCard
