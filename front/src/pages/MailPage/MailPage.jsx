import React, { Component } from "react";
import { Form, Button, Container, Spinner } from "react-bootstrap";
import './MailPage.css';
import Config from '../../config/config'

class MailPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            email: "",
            subject: "",
            contents: "",
            isFetching : false
        }
    }

    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState)
    }

    handleSubmit = async event => {
        event.preventDefault();
        this.setState({isFetching : true})

        const data = {
            "email": this.state.email,
            "subject": this.state.subject,
            "contents": this.state.contents
        }

        await fetch(Config.server_url + '/mail', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            body: JSON.stringify(data)
        }).then((response) => {
            if (response.status === 200) {
                alert('메일 전송 완료!\n 피드백 감사합니다.😄')
                this.setState({isFetching : false})
                document.location = "/mail";
            }else{
                alert('오류 발생 😢\n coronascan2020@gmail.com으로 메일 부탁드립니다.')
                this.setState({isFetching : false})
                document.location = "/mail";
            }
        })

    }

    render() {
        return (
            <section className="mail_section">
                <Container><h2>✉️ Mail Us</h2></Container>
                <ul>
                    {this.state.isFetching ?<div className="mail"><Spinner className="mail_spinner" animation="grow"/></div> :
                    <Form onSubmit={this.handleSubmit}>
                
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="email" type="email" placeholder="Enter email"
                            required type="email"
                            value={this.state.email}
                            onChange={this.handleValueChange} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Subject</Form.Label>
                        <Form.Control name="subject" required type="text"
                            value={this.state.subject}
                            onChange={this.handleValueChange} />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Contents</Form.Label>
                        <Form.Control as="textarea" rows="5"
                            required type="text" name="contents"
                            value={this.state.contents}
                            onChange={this.handleValueChange}
                        />
                    </Form.Group>

                    <Button variant="dark" type="submit" className="mail_submit_btn">
                        Submit
                    </Button>
                    </Form>
                    }
                </ul>
            </section>
        )
    }


}

export default MailPage