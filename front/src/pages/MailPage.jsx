import React, { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";

class MailPage extends Component {

    constructor(props){
        super(props)
        this.state = {
            email : "",
            subject : "",
            contents : ""
        }
    }

    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState)
    }
    
    handleSubmit = async event => {
        event.preventDefault();
        
        const data = {
            "email" : this.state.email,
            "subject" : this.state.subject,
            "contents" : this.state.contents
        }

        await fetch('/mail', {
            method: 'POST',
            headers: {'Content-Type': 'application/json',},
            body: JSON.stringify(data)
        }).then((response)=>{
            if (response.redirected) {
                window.location.href = response.url;
            }
        })

    }

    render() {
        return (
            <div>
                <Container><h1>hehe</h1></Container>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="email" type="email" placeholder="Enter email"
                        required type="email"
                        value={this.state.email}
                        onChange={this.handleValueChange}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Subject</Form.Label>
                        <Form.Control name="subject" required type="text"
                        value={this.state.subject}
                        onChange={this.handleValueChange}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Contents</Form.Label>
                        <Form.Control as="textarea" rows="5"
                        required type="text" name="contents" 
                        value={this.state.contents}
                        onChange={this.handleValueChange}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                </Button>
                </Form>
            </div>
        )
    }


}

export default MailPage