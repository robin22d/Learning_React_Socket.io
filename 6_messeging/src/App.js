import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/list.js';
import AddContent from './components/addContent.js';

import {connected, sendNames, getNames} from "./utils/socketEvents";

//const names = [{id: '1', name: 'robin'}, {id: '2', name: 'james'}];

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            names:[]
        };

        connected();
        getNames((err, data)  => this.setState({
            names: data
        }));
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>

                </header>
                <AddContent
                    names = {this.state.names}
                    createTask={this.createTask.bind(this)}
                />
                <List
                    names = {this.state.names}
                />
            </div>
        );
    }

    createTask(id, name) {

        sendNames(id, name);

        this.state.names.push({
            id,
            name
        });
        this.setState({ names: this.state.names });
    }
}

export default App;
