import React, { useState, useEffect } from "react";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Loader from 'react-loader-spinner'

import API from "../Utils/API";

// 5/5 needs to have a loading element while gitfeed runs
// make them collapsable components that show the time
function GitFeed() {

    const [gitFeed, setGitFeed] = useState([]);
    useEffect(() => {

        async function getFeed() {
            let idArray = await []
            let nameArray = await []
            let urlArray = await []
            let dateArray = await []
            let authorArray = await []
            let messageArray = await []
            const starter = await API.getRepos()
            let sorted = starter.data.sort(function (a, b) {
                return new Date(b.updated_at) - new Date(a.updated_at)

            })

            for (let index of sorted) {
                idArray.push(
                    index.id
                );
                nameArray.push(
                    index.name
                );
                urlArray.push(
                    index.html_url,
                );
                dateArray.push(
                    index.updated_at
                );
            }
            for (let index of sorted) {
                const messages = await API.getCommits(index.name)
                authorArray.push(
                    messages.data[0].commit.author.name
                );
                messageArray.push(
                    messages.data[0].commit.message
                );
            }
            setGitFeed([
                ...gitFeed,
                {
                    id: idArray,
                    name: nameArray,
                    url: urlArray,
                    date: dateArray,
                    author: authorArray,
                    message: messageArray
                }
            ])
        }
        getFeed()
    }, []);

    return (
        <Card variant="outlined" >
            {gitFeed.length ? (
                gitFeed.slice(0, 2).map(obj =>
                    (
                        <Container maxWidth="lg" style={{ padding: '39px' }} >
                            <Grid container spacing={3} justify={"space-evenly"} >
                                <Grid item xs={12} md={10}>
                                    <h1>Current Projects</h1>
                                    <Grid>
                                        <Card style={{ padding: '10px' }} >
                                            <CardContent>
                                                <h2 key={obj.id[0]}>Name:<a href={obj.url[0]} alt={obj.name[0] + " url"}>{obj.name[0]}</a></h2>
                                                <h4>Author:{obj.author[0]}</h4>
                                                <p>Message: {obj.message[0]}</p>
                                                <sub>Date: {obj.date[0]}</sub>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid>
                                        <Card style={{ padding: '10px' }} >
                                            <CardContent>
                                                <h2 key={obj.id[1]}>Name:<a href={obj.url[1]} alt={obj.name[1] + " url"}>{obj.name[1]}</a></h2>
                                                <h4>Author:{obj.author[1]}</h4>
                                                <p>Message: {obj.message[1]}</p>
                                                <sub>Date: {obj.date[1]}</sub>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    <Grid>
                                        <Card style={{ padding: '10px' }} >
                                            <CardContent>
                                                <h2 key={obj.id[2]}>Name:<a href={obj.url[2]} alt={obj.name[2] + " url"}>{obj.name[2]}</a></h2>
                                                <h4>Author:{obj.author[2]}</h4>
                                                <p>Message: {obj.message[2]}</p>
                                                <sub>Date: {obj.date[2]}</sub>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Container>
                    ))

            ) : (
                    <div>
                        <h2 style={{ textAlign: "center" }}>Loading Current Projects</h2>
                        <Loader
                            type="Puff"
                            color="#00BFFF"
                            height={70}
                            width={70}
                            style={{ textAlign: "center" }}
                        />

                    </div>
                )}
        </Card>
    )
}
export default GitFeed