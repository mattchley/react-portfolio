import React from "react";
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function ContactForm() {
    return (
        <Container maxWidth="lg">
            <form noValidate autoComplete="off">
                <h4>Email Address</h4>
                <TextField id="filled-basic" label="name@example.com" variant="filled" fullWidth="true" />
                <h4>Name</h4>
                <TextField id="filled-basic" label="Jordan Rogers" variant="filled" fullWidth="true" />
                <h4>Comment</h4>
                <TextField id="filled-basic" label="Your message here..." variant="filled" fullWidth="true" />
                <Button color="primary" variant="contained">SUBMIT</Button>
            </form>
        </Container>
    )
}

export default ContactForm