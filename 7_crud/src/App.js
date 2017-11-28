import React, { Component } from 'react';
import lodash from 'lodash';
import logo from './logo.svg';
import './App.css';
import List from './components/list.js';
import AddContent from './components/addContent.js';
import {Grid, Row, Col} from 'react-bootstrap';

import {connected, sendNames, getNames, updateName, deleteName} from "./utils/socketEvents";

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
                <Grid>
                    <Row className="show-grid">
                        <header className="App-header">
                            <img src={logo} className="App-logo" alt="logo" />
                            <h1 className="App-title">Welcome to React</h1>
                        </header>
                    </Row>
                    <Row className="show-grid">
                        <AddContent
                            names = {this.state.names}
                            createTask={this.createTask.bind(this)}
                        />
                    </Row>
                    <Row className="show-grid">
                        <List
                            names = {this.state.names}
                            saveTask={this.saveName.bind(this)}
                            deleteName={this.deleteName.bind(this)}

                        />
                    </Row>

                </Grid>




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

    saveName(nameId, newName) {
        const foundName = lodash.find(this.state.names, id => id.id === nameId);
        foundName.name = newName;

        this.setState({ names: this.state.names });

        updateName(this.state.names)

    }

    deleteName(deleteId){

        lodash.remove(this.state.names,  id => id.id === deleteId);
        this.setState({ names: this.state.names });

        deleteName(this.state.names)
    }

}

export default App;
