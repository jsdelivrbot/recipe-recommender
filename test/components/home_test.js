import { renderComponent, expect } from '../test_helper';
import Home from '../../src/components/home';

describe('Home Component', () => {
    let component;

    beforeEach( () => {
        component = renderComponent(Home);
    });

    it('renders something', () => {
        expect(component).to.exist;
    });

    it('displays the site title', () => {
        expect(component.find('h1').text()).to.equal('Recipe Recommendations')
    })
})