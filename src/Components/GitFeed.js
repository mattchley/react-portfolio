import React, { useState, useEffect } from "react";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import API from "../Utils/API";

// 5/5 needs to have a loading element while gitfeed runs
// find a way to interlock states together
// make them collapsable components that show the time
// 
function GitFeed() {

    // const [repos, setRepos] = useState([]);
    // const [commits, setCommits] = useState([]);
    const [gitFeed, setGitFeed] = useState([]);
    useEffect(() => {

        async function getFeed() {
            const starter = await API.getRepos()
            let starterArray = await []
            for (let index of starter.data) {
                let results = index
                starterArray.push({
                    id: results.id,
                    name: results.name,
                    url: results.html_url,
                    date: results.updated_at
                });
            }
            const sorted = await starterArray.sort(function (a, b) {
                return new Date(b.date) - new Date(a.date);
            });

            let resultsArray = await []
            for (let index of sorted) {
                const messages = await API.getCommits(index.name)
                resultsArray.push({
                    author: messages.data[0].commit.author.name,
                    message: messages.data[0].commit.message
                })
            }
            // setRepos(starterArray)
            // setCommits(resultsArray)
            setGitFeed([
                {
                    repos: starterArray,
                    commits: resultsArray
                }
            ])
        }
        getFeed()
    }, []);

    const tester = () => {
        console.log(gitFeed.slice(0, 5).map(obj => obj.repos))
    }

    return (
        <div>
            <h2>Top 5 Projects I'm working on</h2>
            <button onClick={tester}>Test</button>

            {gitFeed.map(obj =>
                obj.repos.slice(0, 5).map(obj =>
                    <p>{obj.name}</p>
                )
            )}
            {/* <Grid container spacing={0} justify={"space-evenly"}>
                <Grid item xs={6} md={6}>
                    {repos.length ? (
                        <div>
                            {repos.slice(0, 5).map(repo =>
                                (
                                    <Card>
                                        <CardContent>
                                            <h2 key={repo.id}>
                                                Name:
                                    <a href={repo.url} alt={repo.name + " url"}>{repo.name}</a>
                                            </h2>
                                            <p>Latest Commit: {repo.date}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                        </div>
                    ) : (
                            <h2>There is something wrong. 404</h2>
                        )}
                </Grid>
                <Grid item xs={6} md={6}>
                    {commits.length ? (
                        <div>
                            {commits.slice(0, 5).map(commit =>
                                (
                                    <Card>
                                        <CardContent>
                                            <h2>Author: {commit.author}</h2>
                                            <p>Message:
                                        {commit.message}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                        </div>
                    ) : (
                            <h2>There is something wrong. 404</h2>
                        )}
                </Grid>

            </Grid> */}


        </div>
    )
}
export default GitFeed