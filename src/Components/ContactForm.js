import React, { useState } from "react";
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';

function ContactForm() {

    const [email, setEmail] = useState();
    const [name, setName] = useState();
    const [comment, setComment] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, name, comment)
        
        const resetForm =() => {
            setEmail('')
            setName('')
            setComment('')

        }
        resetForm()
    }

    return (
        <Container maxWidth="lg">
            <form noValidate autoComplete="off">
                <h4>Email Address</h4>
                <TextField
                    type='text'
                    id="filled-basic"
                    label="name@example.com"
                    variant="filled"
                    fullWidth="true"
                    value={email}
                    onChange={e => setEmail(e.target.value.trim())} />
                <h4>Name</h4>
                <TextField
                    type='text'
                    id="filled-basic"
                    label="Jordan Rogers"
                    variant="filled"
                    fullWidth="true"
                    value={name}
                    onChange={e => setName(e.target.value.trim())} />
                <h4>Comment</h4>
                <TextField
                    type='text'
                    id="filled-basic"
                    label="Your message here..."
                    variant="filled"
                    fullWidth="true"
                    value={comment}
                    onChange={e => setComment(e.target.value.trim())} />
                <Button color="primary" variant="contained" onClick={handleSubmit}>SUBMIT</Button>
            </form>
        </Container>
    )
}

export default ContactForm