/**
 * Created by john on 23/10/17.
 */
import React from 'react';
import lodash from 'lodash';
import ListItem from './listItem.js'

export default class List extends React.Component {

    renderItems(){

        const props = lodash.omit(this.props, 'names');
        return lodash.map(this.props.names, (names, i) => <ListItem key={i} {...names} {...props}/>)
    }

    render() {
        return (
                <div>
                    {this.renderItems()}
                </div>
        );
    };

}
