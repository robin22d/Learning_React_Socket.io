/**
 * Created by john on 23/10/17.
 */
import React from 'react';

export default class AddContent extends React.Component {



    render(){
        return(
            <div>
                <form onSubmit={this.handleCreate.bind(this)}>
                    <input default='name' ref="createInput"/>
                    <input type='submit'/>
                </form>
            </div>
        );
    };

    handleCreate(event) {
        event.preventDefault();

        const createInput = this.refs.createInput;
        const id = new Date();
        const name = createInput.value;


        this.props.createTask(id, name);
        this.refs.createInput.value = '';
    }
};