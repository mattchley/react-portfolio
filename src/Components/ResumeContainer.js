import React from "react";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import ResumePDF from '../Images/Resume/CodingResume.pdf'



function ResumeContainer() {
    return (
        <Container maxWidth="lg">
            <Grid container spacing={1} justify={'center'}>
                <Grid>
                    <iframe src={ResumePDF} alt="PDF Resume" style={{ height: "600px", width: "700px" }} />
                </Grid>
            </Grid>
        </Container>
    )
}

export default ResumeContainer