import React, { Component } from 'react';
import { TextField, Button } from '@material-ui/core';
import './signUp.css';


export default class SignUp extends Component {

    state = {
        email: "",
        userName: "",
        password: "",
        confirmPassword: ""
    }

    onSignUpClick = () => {

        const { email, userName, password } = this.props.login;

        this.props.signUpUser({ email, userName, password });
    }

    onSignInClick = () => {

    }

    onTextValueChange = (field, event) => {
         
        this.setState({ [field]: event.target.value });
        this.props.textValueChanged(field, event.target.value)
    }


    render() {
        return (
            <div className="signUpContainer">
                <div className="header">
                    SIGN UP
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
                <div className="buttonContainer">
                    <Button onClick={this.onSignUpClick} variant="contained" color="primary" className={"button"}>
                        SIGN UP
                    </Button>
                </div>
                <div className="buttonContainer">
                    <Button onClick={this.onSignInClick} variant="contained" color="primary" className={"button"}>
                        SIGN IN
                    </Button>
                </div>

            </div>
        )
    }
}


