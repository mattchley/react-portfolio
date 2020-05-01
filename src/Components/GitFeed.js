import React, { useState, useEffect } from "react";
import Grid from '@material-ui/core/Grid';

import API from "../Utils/API";


function GitFeed() {

    const [repos, setRepos] = useState([]);
    const [commits, setCommits] = useState([]);
    useEffect(() => {

        async function getFeed() {
            const starter = await API.getRepos()
            let starterArray = await []
            for (let index of starter.data) {
                let results = index
                let parsedDate = Date.parse(results.updated_at)
                starterArray.push({
                    id: results.id,
                    name: results.name,
                    url: results.html_url,
                    date: parsedDate
                });
            }
            const sorted = await starterArray.sort((a, b) => b['date'] - a['date']);

            let resultsArray = await []
            for (let index of sorted) {
                const messages = await API.getCommits(index.name)
                resultsArray.push({
                    author: messages.data[0].commit.author.name,
                    message: messages.data[0].commit.message
                })
                console.log(resultsArray)
            }
            setRepos(starterArray)
            setCommits(resultsArray)
        }
        getFeed()
    }, []);

    return (
        <div>
            <h2>Top 5 Projects I'm working on</h2>
            <Grid container spacing={0} justify={"space-evenly"}>
                <Grid item xs={12} md={6}>
                    {repos.length ? (
                        <div>
                            {repos.slice(0, 5).map(repo =>
                                (
                                    <div>
                                        <h2 key={repo.id}>
                                            Name:
                                    <a href={repo.url} alt={repo.name + " url"}>{repo.name}</a>
                                        </h2>
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
                            {commits.slice(0, 5).map(commit =>
                                (
                                    <div>

                                        <h2>Author: {commit.author}</h2>
                                        <p>Message:
                                        {commit.message}</p>

                                    </div>
                                ))}
                        </div>
                    ) : (
                            <h2>There is something wrong. 404</h2>
                        )}
                </Grid>

            </Grid>


        </div>
    )
}
export default GitFeed