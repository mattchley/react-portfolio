import React, { useState, useEffect } from "react";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import API from "../Utils/API";


function GitFeed() {

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
        let holder3 = []
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
                    holder3.push(holder2)
                })
                .catch(err => console.log(err));

        }
        setCommits(holder3)
    };


    const tester = () => {
        console.log(commits)
    }

    
    return (
        <div>
            {/* <Button onClick={loadCommits}>WHAT IM CURRENTLY WORKING ON2</Button>
            <Button onClick={tester}>WHAT IM CURRENTLY WORKING ON3</Button> */}
            <Grid container spacing={0} justify={"space-evenly"}>
                <Grid item xs={12} md={12}>
                    <h2>My Repos</h2>
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
                {/* <Grid item xs={12} md={6}>
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
                </Grid> */}

            </Grid>


        </div>
    )
}
export default GitFeed