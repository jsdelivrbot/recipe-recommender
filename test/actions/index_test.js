import { expect } from '../test_helper';
import { signIn, signOut, search } from '../../src/actions';
import { SWITCH_AUTH, SEARCH } from '../../src/actions/types';

describe('Actions', () => {

    describe('Sign in', () => {
        it('has correct type', () => {
            expect(signIn().type).to.equal(SWITCH_AUTH);
        });

        it('has correct payload', () => {
            expect(signIn().payload).to.equal(true);
        });
    });

    describe('Sign out', () => {
        it('has correct type', () => {
            expect(signOut().type).to.equal(SWITCH_AUTH);
        });

        it('has correct payload', () => {
            expect(signOut().payload).to.equal(false);
        });
    });

    describe('Search', () => {

        it('has correct type', () => {
            expect(search().type).to.evetually.equal(SEARCH)
        });

        it('sends data to the API', () => {
            expect(search('pizza').payload.data).to.equal();
        });

    });

});