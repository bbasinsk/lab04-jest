'use strict';

import {greet, invertCase} from '../js/app'; //import the functions to test!

/* tests go here */

describe('Basic math', function() {
    it('Should add numbers correctly', function() {
        let sum = 1+1;
    
        expect(sum).toEqual(2);
    });


});

describe('invertCase() function', function() {

    it('Should switch cases', function() {
        let testString = 'This is a TEST';
        let correctResult = 'tHIS IS A test';
        let resultString = invertCase(testString);

        expect(resultString).toEqual(correctResult);
    });

});

describe('Greeting function', function() {

    it('Should use correct name', function() {
        let testName = 'World';
        let correctResult = 'Hello, World';
        let resultString = greet(testName);

        expect(resultString).toEqual(correctResult);
    });

});
