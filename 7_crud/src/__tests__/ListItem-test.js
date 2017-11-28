
import React from 'react';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';

import ListItems from '../components/listItem.js';

it('Component renders without crashing', () => {
    shallow(<ListItems />);
});

it('Starting state is correct', () => {
    const app = shallow(<ListItems/>);
    expect(app.state('isEditing')).toEqual('false');
});

it('Should change the state of is editing to true', function () {
    const listItem = mount(<ListItems/>);
    listItem.find('button#edit').simulate('click');
    expect(listItem.state('isEditing')).toEqual('true');
});