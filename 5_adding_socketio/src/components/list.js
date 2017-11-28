/**
 * Created by john on 23/10/17.
 */
import React from 'react';

export default class List extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            editing: true
        }
    }

    render() {

        const data =this.props.names;
        const listItems = data.map((i) => <li key={i.name}>{i.name}</li>);

        return (
                <ul>
                    {listItems}
                </ul>
        );
    };

}
