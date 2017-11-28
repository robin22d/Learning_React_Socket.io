/**
 * Created by john on 12/11/17.
 */
import React from 'react';
import { shallow } from 'enzyme';
import App from '../App.js';

it('Component renders without crashing', () => {
    shallow(<App />);
});

it('Starting state is correct', () => {
    const app = shallow(<App/>);
    expect(app.state('names')).toEqual([{ name: 'robin'}, {name: 'james'}]);
});

it('Starting state is correct length', () => {
    const app = shallow(<App/>);
    expect(app.find('List')).toHaveLength(1);
});

it('State can be changed', () => {
    const app = shallow(<App/>);
    app.setState({ names: [{name: 'robin'}, {name: 'james'}, {name: 'bob'}]});
    expect(app.state('names')).toEqual([{name: 'robin'}, {name: 'james'}, {name: 'bob'}]);
});