import * as React from 'react';
import BasicText from '~/components/BasicText';
import { shallow } from 'enzyme';

describe('Basic Tests', () => {

    test('Confirm that Jest runs successfully', () => {
        const isValidTest = true;
        expect(isValidTest).toBe(true);
    });

    test('Match <BasicText /> text content', () => {
        const wrapper = shallow(<BasicText text="REACT PACKAGE BASIC COMPONENT" />);
        expect(wrapper.text().toLowerCase()).toBe('react package basic component');
    });
});