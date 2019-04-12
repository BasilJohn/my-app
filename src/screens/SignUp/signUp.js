import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core';

import './signUp.css';


export default class SignUp extends Component {

    state = {
        email: "",
        userName: "",
        password: "",
        confirmPassword: "",
        isSignIn: false
    }

    onSignUpClick = () => {

        this.setState({ isSignIn: false });
        const { email, userName, password } = this.props.login;

        this.props.signUpUser({ email, userName, password });


    }


    componentDidUpdate(prevProps, prevState) {

        if (prevProps.login.loginInformation !== this.props.login.loginInformation) {
            let route = '/home';
            this.props.history.push(route);
        }

        if (prevProps.login.errorInformation !== this.props.login.errorInformation) {
            
        }
    }

    onSignInClick = () => {

        this.setState({ isSignIn: true });

        const { email, password } = this.props.login;

        this.props.signInUser({ email, password });
    }

    onTextValueChange = (field, event) => {

        this.setState({ [field]: event.target.value });
        this.props.textValueChanged(field, event.target.value)
    }




    render() {

        return (
            <div className="signUpContainer">

                <div className="header">
                    {this.state.isSignIn ? "SIGN IN" : "SIGN UP"}
                </div>

                <TextField
                    id="txtEmail"
                    label="Email"
                    placeholder="Email"
                    className="textField"
                    margin="normal"
                    variant="outlined"
                    onChange={(event) => this.onTextValueChange("email", event)}
                    value={this.props.login.email}

                />

                {!this.state.isSignIn &&
                    <TextField
                        id="txtUserName"
                        label="User Name"
                        placeholder="User Name"
                        className="textField"
                        margin="normal"
                        variant="outlined"
                        onChange={(event) => this.onTextValueChange("userName", event)}
                        value={this.props.login.userName}
                    />
                }
                <TextField
                    id="txtPassword"
                    label="Password"
                    className="textField"
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                    variant="outlined"
                    onChange={(event) => this.onTextValueChange("password", event)}
                    value={this.props.login.password}

                />
                {!this.state.isSignIn &&
                    <TextField
                        id="txtConfirmPassword"
                        label="Confirm Password"
                        className="textField"
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                        variant="outlined"
                        onChange={(event) => this.onTextValueChange("confirmPassword", event)}
                        value={this.state.confirmPassword}
                    />
                }
                <div className="buttonContainer">
                    <Button onClick={this.onSignUpClick} variant="contained" color="primary"
                        className={"button"}>
                        SIGN UP
                    </Button>
                </div>
                <div className="buttonContainer">
                    <Button onClick={this.onSignInClick} variant="contained" color="primary"
                        className={"button"}>
                        SIGN IN
                    </Button>
                </div>

            </div >
        )
    }
}


