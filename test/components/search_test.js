import { renderComponent, expect } from '../test_helper';
import Search from '../../src/components/search';

describe('Search page', () => {
    let component, recipeList;
    
    beforeEach( () => {
        recipeList = [{"id":840513,"title":"Honey Soy Baked Chicken Thighs","readyInMinutes":45,"image":"honey-soy-baked-chicken-thighs-840513.jpg","imageUrls":["honey-soy-baked-chicken-thighs-840513.jpg"]},{"id":583672,"title":"Sweet & Sticky Baked Chicken Drumsticks","readyInMinutes":45,"image":"Sweet---Sticky-Baked-Chicken-Drumsticks-583672.jpg","imageUrls":["Sweet---Sticky-Baked-Chicken-Drumsticks-583672.jpg"]},{"id":765636,"title":"Southwestern Grilled Chicken with Lime Butter","readyInMinutes":50,"image":"southwestern-grilled-chicken-with-lime-butter-765636.jpg","imageUrls":["southwestern-grilled-chicken-with-lime-butter-765636.jpg"]},{"id":621207,"title":"Chicken Fajita Stuffed Peppers","readyInMinutes":40,"image":"Chicken-Fajita-Stuffed-Peppers-621207.jpg","imageUrls":["Chicken-Fajita-Stuffed-Peppers-621207.jpg"]},{"id":719022,"title":"Honey Sriracha Chicken","readyInMinutes":50,"image":"honey-sriracha-chicken-719022.jpg","imageUrls":["honey-sriracha-chicken-719022.jpg"]},{"id":735961,"title":"Chicken Pot Pie Pockets","readyInMinutes":35,"image":"chicken-pot-pie-pockets-735961.jpg","imageUrls":["chicken-pot-pie-pockets-735961.jpg"]},{"id":820719,"title":"Roasted Chicken Provençal","readyInMinutes":75,"image":"roasted-chicken-provenal-820719.jpg","imageUrls":["roasted-chicken-provenal-820719.jpg"]},{"id":584806,"title":"Crockpot Chicken Tortilla Soup with Black Beans & Corn (Slow Cooker)","readyInMinutes":45,"image":"Crockpot-Chicken-Tortilla-Soup-with-Black-Beans---Corn-(Slow-Cooker)-584806.jpg","imageUrls":["Crockpot-Chicken-Tortilla-Soup-with-Black-Beans---Corn-(Slow-Cooker)-584806.jpg"]},{"id":473591,"title":"Quinoa Chicken and Black Bean Burritos with Chipotle Guacamole","readyInMinutes":30,"image":"Quinoa-Chicken-and-Black-Bean-Burritos-with-Chipotle-Guacamole-473591.jpg","imageUrls":["Quinoa-Chicken-and-Black-Bean-Burritos-with-Chipotle-Guacamole-473591.jpg"]},{"id":524632,"title":"Chipotle Lime Grilled Chicken Skewers with Avocado Ranch","readyInMinutes":60,"image":"Chipotle-Lime-Grilled-Chicken-Skewers-with-Avocado-Ranch-524632.jpg","imageUrls":["Chipotle-Lime-Grilled-Chicken-Skewers-with-Avocado-Ranch-524632.jpg"]}]
        component = renderComponent(Search, null, {
            searchResults: recipeList
        });
    });

    describe('renders', () => {

        it('the title of the page', () => {
            expect(component.find('h1').text()).to.equal('Search Results');
        });

        it('the correct number of recipes', () => {
            expect(component.find('li')).to.have.length(recipeList.length);
        });
    })
})