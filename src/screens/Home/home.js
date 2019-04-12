import React, { Component } from 'react';
import { Paper, InputBase, IconButton, Button, AppBar } from '@material-ui/core';
import Script from 'react-load-script';
import SearchIcon from '@material-ui/icons/Search';

import './home.css';


export default class Home extends Component {


    render() {
        return (
            <div className="homeContainer">

                <div className="searchContainer">
                    <div>
                        <h1 className="headerText">Where are you travelling to</h1>
                    </div>
                    <div className="inputContainer">
                        <Paper className={"root"} elevation={1}>
                            <InputBase className={"input"} placeholder="From" />
                            <IconButton className={"iconButton"} aria-label="Search">
                                <SearchIcon />
                            </IconButton>
                        </Paper>
                    </div>
                    <div className="inputContainer">
                        <Paper className={"root"} elevation={1}>
                            <InputBase className={"input"} placeholder="To" />
                            <IconButton className={"iconButton"} aria-label="Search">
                                <SearchIcon />
                            </IconButton>
                        </Paper>
                    </div>
                    <div className="createButtonContainer">
                        <Button onClick={this.onCreateTrip} variant="contained" color="primary" className={"button"}>
                            CREATE TRIP
                    </Button>
                    </div>
                </div>
            </div>
        )
    }
}


