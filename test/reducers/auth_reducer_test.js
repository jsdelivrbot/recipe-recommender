import AuthReducer from '../../src/reducers/auth_reducer';
import { expect } from '../test_helper';
import { SWITCH_AUTH } from '../../src/actions/types';

describe('Auth Reducer', () => {

    it('returns existing state object if action type doesnt match', () => {
        const stateTest = {test: 'This is a test'};
        const actionTest = {type: 'NO_MATCH'};
        expect(AuthReducer(stateTest, actionTest)).to.equal(stateTest);
    });

    describe('SWITCH_AUTH', () => {

        it('returns true when called with true', () => {
            const actionTest = {
                type: SWITCH_AUTH,
                payload: true
            };

            expect(AuthReducer({}, actionTest)).to.equal(true);
        });

        it('returns false when called with false', () => {
            const actionTest = {
                type: SWITCH_AUTH,
                payload: false
            };

            expect(AuthReducer({}, actionTest)).to.equal(false);
        });

    });

});