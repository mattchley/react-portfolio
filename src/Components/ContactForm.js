import React, { useState } from "react";
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import emailjs from 'emailjs-com';

function ContactForm() {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [comment, setComment] = useState()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('mattchley_gmail_com', 'template_XY6Pmm18', e.target, 'user_CwYcGz0aUZryjiqUO1oC0')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        const resetForm = () => {
            setName('')
            setEmail('')
            setComment('')
        }

        resetForm()
    }


    return (
        <Container maxWidth="lg">
            <form noValidate autoComplete="off" onSubmit={sendEmail}>
                <h4>Email Address</h4>
                <TextField
                    type='text'
                    id="filled-basic"
                    label="name@example.com"
                    variant="filled"
                    fullWidth="true"
                    name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value.trim())}
                />
                <h4>Name</h4>
                <TextField
                    type='text'
                    id="filled-basic"
                    label="Jordan Rogers"
                    variant="filled"
                    fullWidth="true"
                    name="name"
                    value={name}
                    onChange={e => setName(e.target.value.trim())}
                />
                <h4>Comment</h4>
                <TextField
                    type='text'
                    id="filled-basic"
                    label="Your message here..."
                    variant="filled"
                    fullWidth="true"
                    name="comment"
                    value={comment}
                    onChange={e => setComment(e.target.value.trim())}
                    // style={{height: "130px"}}
                />
                <input type="submit" value="Send" />
            </form>
        </Container>
    )
}

export default ContactForm