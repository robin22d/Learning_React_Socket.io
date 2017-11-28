import React from 'react';

import {Grid, Row, Col, Button} from 'react-bootstrap';

export default class ItemList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isEditing: false
        };
    }



    renderEditSection(){
        const { name } = this.props;

        if (this.state.isEditing) {
            return (
                <form onSubmit={this.onSaveClick.bind(this)}>
                    <input type="text" defaultValue={name} ref="editName" />
                </form>
            );
        }

        return (
            <li>
                {name}
            </li>
        );
    }

    renderButtonSection() {
        if (this.state.isEditing) {
            return (
                <div>
                    <Button bsStyle="success" onClick={this.onSaveClick.bind(this)}>Save</Button>
                    <Button onClick={this.onCancelClick.bind(this)}>Cancel</Button>
                </div>
            );
        }

        return (
            <div>
                <Button bsStyle="primary" onClick={this.onEditClick.bind(this)}>Edit</Button>
                <Button bsStyle="danger" onClick={this.props.deleteName.bind(this, this.props.id)}>Delete</Button>
            </div>
        );
    }

    render() {

        return (
            <div>
                <Col sm={6} md={3} />
                <Col sm={6} md={3} >{this.renderEditSection()}</Col>
                <Col sm={6} md={3} >{this.renderButtonSection()}</Col>
                <Col sm={6} md={3} />
            </div>
        );
    };


    onEditClick() {
        this.setState({ isEditing: true });
    }

    onCancelClick() {
        this.setState({ isEditing: false });
    }

    onSaveClick(event) {
        event.preventDefault();

        const nameId = this.props.id;
        const newName = this.refs.editName.value;
        this.props.saveTask(nameId, newName);
        this.setState({ isEditing: false });
    }
}
