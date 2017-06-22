import { renderComponent, expect } from '../test_helper';
import RecipeCard from '../../src/components/recipe_card';

describe('Recipe Card', () => {
    let component;
    let recipe;

    beforeEach( () => {
        recipe = {"id":840513,"title":"Honey Soy Baked Chicken Thighs","readyInMinutes":45,"image":"honey-soy-baked-chicken-thighs-840513.jpg","imageUrls":["honey-soy-baked-chicken-thighs-840513.jpg"]};
        component = renderComponent(RecipeCard, recipe);
    });

    describe('renders', () => {

        it('the title of the recipe', () => {
            expect(component.find('h3').text()).to.equal(recipe.title);
        });

        it('the main image', () => {
            expect(component.find('img')).has.attr('src', `https://spoonacular.com/${recipe.image}`);
        });
    });

});