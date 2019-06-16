import React from 'react';
import firebase from '../firebase';
import { Grid, Form, Segment, Button, Header, Message, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    state = {
        username: '',
        email: '',
        password: '',
        errors: [],
        loading: false,
    }

    displayErrors = errors => errors.map((error, index) => <p key={index}>{error.message}</p>)

    handleChange = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleInputError = (errors, input) => {
        return errors.some(err => err.message.toLowerCase().includes(input)) ? 'error' : ''
    }

    handleSubmit = event => {
        const { email, password } = this.state
        event.preventDefault();
        if(this.isFormValid(this.state)) {
            this.setState({ errors: [], loading: true });
            firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then(signedInUser => {
                    console.log(signedInUser)
                })
                .catch(err => {
                    console.error(err)
                    this.setState({
                        errors: this.state.errors.concat(err),
                        loading: false 
                    })
                })

        }
        
    }

    isFormValid = ({ email, password }) => email && password;

    render() {
        const { username, email, password, errors, loading } = this.state;
        return (
            <Grid textAlign="center" verticalAlign="middle" className="app">
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as="h1" icon color="violet" textAlign="center">
                        <Icon name="code branch" color="violet" />
                        Login to DevChat
                    </Header>
                    <Form onSubmit={this.handleSubmit} size="large">
                        <Segment stacked>
                            <Form.Input fluid name="email" icon="mail" iconPosition="left"
                            placeholder="Email Address" value={email} onChange={this.handleChange} type="email" 
                            className={this.handleInputError(errors, 'email')}
                            />

                            <Form.Input fluid name="password" icon="lock" iconPosition="left"
                            placeholder="Password" value={password} onChange={this.handleChange} type="password" 
                            className={this.handleInputError(errors, 'password')}
                            />

                            <Button 
                                disabled={loading}
                                className={loading ? 'loading' : ''}
                                color="violet" 
                                fluid size="large"
                            >Submit</Button> 
                        </Segment>
                    </Form>
                    {errors.length > 0 && (
                        <Message error>
                            <h3>Error</h3>
                            {this.displayErrors(errors)}
                        </Message>
                    )}
                    <Message>Don't have an account?<Link to="/register">Register</Link></Message>
                </Grid.Column>
            </Grid>
        )
    }
}

export default Login