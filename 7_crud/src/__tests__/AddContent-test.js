
import React from 'react';
import { shallow } from 'enzyme';
import AddContent from '../components/addContent.js';

it('renders without crashing', () => {
    shallow(<AddContent />);
});

// it('renders without crashing', () => {
//     const app = shallow(<AddContent/>);
//
//     const form = app.find('form');
//
//     expect(app().state().submitted).toEqual(false);
//     form.simulate('submit', { preventDefault () {} });
//     expect(app().state().submitted).toEqual(true);
// });