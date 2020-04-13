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
                let holder = [];
                
                
                for (let index of res.data) {
                    let results = index
                    let parsedDate = Date.parse(results.updated_at)
                    holder.push({
                        id: results.id,
                        name: results.name,
                        url: results.html_url,
                        date: parsedDate
                    });
                    
                }
                const sorted = holder.sort((a, b) => b['date'] - a['date']);
                console.log(sorted)
                setRepos(sorted);

            })
            .catch(err => console.log(err));

    }, []);


    const loadCommits = () => {
        let holder3 = []
        for (let index of repos) {
            let repoName = index.name
            API.getCommits(repoName)
                .then(res => {
                    // runs throught all the names
                    let holder2 = [];
                    holder2.push({
                        id: res.data[0].sha,
                        name: repoName,
                        author: res.data[0].commit.author.name,
                        message: res.data[0].commit.message,
                        date: res.data[0].commit.author.date
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