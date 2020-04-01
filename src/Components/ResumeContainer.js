import React from "react";
import Container from '@material-ui/core/Container';
import ResumePDF from '../Images/Resume/CodingResume.pdf'



function ResumeContainer() {
    return (
        <Container maxWidth="lg">
           <p>ResumeContainer goes here!</p>
           <iframe src={ResumePDF} alt="PDF Resume" style = {{height: "560px", width: "400px"}} />
        </Container>
    )
}

export default ResumeContainer