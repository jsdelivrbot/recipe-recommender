import { renderComponent, expect } from '../test_helper';
import Header from '../../src/components/header';

describe('Header Component', () => {
    let component;

    beforeEach( () => {
        component = renderComponent(Header);
    });

    it('renders something', () => {
        expect(component).to.exist;
    });

    it('contains the logo', () => {
        expect(component.find('.logo').text()).to.equal('Rec-Rec')
    });

    it('contains a search bar', () => {
        expect(component.find('.search-bar')).to.exist;
    });

    describe('search bar', () => {
        let searchBar;

        beforeEach( () => {
            searchBar = component.find('input.search-bar');
        });

        it('has a label', () => {
            expect(component.find('label.search-bar')).to.exist;
        });

        it('updates the value on text changes', () => {
            expect(searchBar).to.have.value('');
            searchBar.simulate('change', 'new search');
            expect(searchBar).to.have.value('new search');
        });
/*
        it('resets the value on submit', () => {
            searchBar.simulate('change', 'new search');
            component.find('form').simulate('submit');
            expect(searchBar).to.have.value('');
        });
        */

    });

    describe('authentication nav', () => {

        it('has a sign in button', () => {
            expect(component.find('button.sign-in')).to.exist;
        });

        it('has a sign up button', () => {
            expect(component.find('button.sign-up')).to.exist;
        });

        it('displays a sign out button when the user is already authenticated', () => {
            const newComponent = renderComponent(Header, null, {
                authenticated: true
            });

            expect(newComponent.find('button.sign-out')).to.exist;
        });

        it('displays the sign out button when the sign in button is clicked', () => {
            component.find('button.sign-in').simulate('click');
            expect(component.find('button.sign-out')).to.exist;
        });

        it('displays the sign in button when the sign out button is clicked', () => {
            component.find('button.sign-in').simulate('click');
            component.find('button.sign-out').simulate('click');

            expect(component.find('button.sign-in')).to.exist;
        });

    });

});