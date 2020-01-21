import React from 'react';
import { shallow, mount } from 'enzyme';

import Counter from './index';

describe('Counter component', () => {
    const nullCounterValue = 0;
    const counterValue = 10;
    it('should match snapshot with initial counter value', () => {
        const counter = shallow(<Counter counter={nullCounterValue} />);
        expect(counter).toMatchSnapshot();
    });
    it('should match snapshot with not null counter value', () => {
        const counter = shallow(<Counter counter={counterValue} />);
        expect(counter).toMatchSnapshot();
    });
    it('should be rendered correctly with given props', () => {
        const counter = mount(<Counter counter={counterValue} />);
        console.log('Counter length', counter.prop('counter'));
        expect(counter.prop('counter')).toEqual(counterValue);
    });
});
