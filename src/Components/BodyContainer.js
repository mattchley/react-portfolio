import React, { useState, useEffect } from "react";
import MattProfile from "../Images/ProfilePic/profile.jpg"
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import API from "../Utils/API";


function BodyContainer() {

    const [repos, setRepos] = useState([]);
    const [commits, setCommits] = useState([]);

    useEffect(() => {
        API.getRepos()
            .then(res => {
                const gitRepos = res.data;
                let holder = [];
                for (let index of gitRepos) {
                    let repoResults = index
                    holder.push({
                        id: repoResults.id,
                        name: repoResults.name,
                        url: repoResults.html_url,
                        date: repoResults.updated_at
                    });
                }
                setRepos(holder);
            })
            .catch(err => console.log(err));

    }, []);

    const loadCommits = () => {

        for (let index of repos) {
            let repoName = index.name
            API.getCommits(repoName)
                .then(res => {
                    const gitCommits = res.data;
                    // runs throught all the names
                    let holder2 = [];
                    holder2.push({
                        id: gitCommits[0].sha,
                        name: repoName,
                        author: gitCommits[0].commit.author.name,
                        message: gitCommits[0].commit.message,
                        date: gitCommits[0].commit.author.date
                    });
                    setCommits(holder2)
                })
                .catch(err => console.log(err));

        }

    };

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
            <div>
                <Button onClick={loadCommits}>WHAT IM CURRENTLY WORKING ON2</Button>
                <Grid container spacing={0} justify={"space-evenly"}>
                    <Grid item xs={12} md={6}>
                        {repos.length ? (
                            <div>
                                {repos.map(repo =>
                                    (
                                        <div>
                                            <h3 key={repo.id}>
                                                Name:
                                    <a href={repo.url} alt={repo.name + " url"}>{repo.name}</a>
                                            </h3>
                                            <p>Latest Commit: {repo.date}</p>
                                        </div>
                                    ))}
                            </div>
                        ) : (
                                <h2>There is something wrong. 404</h2>
                            )}
                    </Grid>
                    <Grid item xs={12} md={6}>
                        {commits.length ? (
                            <div>
                                {commits.map(commit =>
                                    (
                                        <div>
                                            <h3 key={commit.id}> {commit.name} </h3>
                                            <h2>Author: {commit.author}</h2>
                                            <h2> Message : {commit.message}</h2>
                                            <p>Latest Commit: {commit.date}</p>
                                        </div>
                                    ))}
                            </div>
                        ) : (
                                <h2>There is something wrong. 404</h2>
                            )}
                    </Grid>

                </Grid>


            </div>
        </Container>
    )
}

export default BodyContainer