import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/list.js';

const names = [{ name: 'robin'}, {name: 'sara'}];

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            names
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>

                </header>
                <List
                    names = {this.state.names}
                />
            </div>
        );
    }
}

export default App;
