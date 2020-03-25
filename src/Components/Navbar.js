import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';



function NavBar() {

    return (
        <nav style={{ backgroundColor: "lightblue" }}>
            <Container  disableGutters='false'>
                <Grid container spacing={12}>
                    <Grid item xs={12} sm={10}>
                        <Typography color="textPrimary"> MATTHEW ATCHLEY</Typography>
                    </Grid>
                    <Grid item xs={12} sm={2}>
                        <Breadcrumbs aria-label="breadcrumb">
                            <Link
                                className="link" to="/"
                            > About </Link>
                            <Link
                                className="link" to="/projects"
                            > Projects </Link>
                            <Link
                                className="link" to="/contact"
                            > Contact </Link>
                        </Breadcrumbs>
                    </Grid>

                </Grid>
            </Container>
        </nav>
    )
}

export default NavBar;