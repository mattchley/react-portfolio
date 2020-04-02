import React, { useState, useEffect } from "react";
import MattProfile from "../Images/ProfilePic/profile.jpg"
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import API from "../Utils/API";


function BodyContainer() {

    const [repos, setRepos] = useState([]);
    const [commits, setCommits] = useState([])

    const loadRepos = () => {
        API.getRepos()
            .then(res => {
                const results = res.data;

                let holder = [];

                for (let index of results) {
                    let repoResults = index
                    holder.push({
                        id: repoResults.id,
                        name: repoResults.name,
                        url: repoResults.html_url,
                        started: repoResults.created_at,
                        updated: repoResults.updated_at,
                        commits: repoResults.commits_url.replace("{/sha}", "")
                    });
                }
                setRepos(holder);
            })
            .catch(err => console.log(err));
    };

    const loadCommits = () => {
        // needs to iterate searches by putting the for ... of loop outside of the API search
        API.getCommits("Druggler")
            .then(res => {
                setCommits({
                    id: res.data[0].sha,
                    author: res.data[0].commit.author.name,
                    message: res.data[0].commit.message
                });
            })
            .catch(err => console.log(err));
    };

    // need a second API for commits/comments that is based on a framework of https://api.github.com/repos/mattchley/{project name}/commits

    // useEffect(() => {
    //     if (!search) {
    //       return;
    //     }

    //     API.searchTerms(search)
    //       .then(res => {
    //         if (res.data.length === 0) {
    //           throw new Error("No results found.");
    //         }
    //         if (res.data.status === "error") {
    //           throw new Error(res.data.message);
    //         }
    //         setTitle(res.data[1][0]);
    //         setUrl(res.data[3][0]);
    //       })
    //       .catch(err => setError(err));
    //   }, [search]);

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
                <Button onClick={loadRepos}>WHAT IM CURRENTLY WORKING ON</Button>
                <Button onClick={loadCommits}>WHAT IM CURRENTLY WORKING ON2</Button>
                {repos.length ? (
                    <dvi>
                        {repos.map(repo =>
                            (
                                <div>
                                    <h3 key={repo.id}>
                                        Name:
                                    <a href={repo.url} alt={repo.name + " url"}>{repo.name}</a>
                                    </h3>
                                    <h5>{repo.updated}</h5>
                                    <h5>{repo.started}</h5>
                                </div>
                            ))}
                    </dvi>
                ) : (
                        <h2>There are no current repos.</h2>
                    )}
            </div>
        </Container>
    )
}

export default BodyContainer