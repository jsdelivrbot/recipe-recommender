import { expect } from '../test_helper';
import SearchReducer from '../../src/reducers/search_reducer';
import { SEARCH } from '../../src/actions/types';

describe('Search Reducer', () => {

    it('returns the existing state', () => {
        expect(SearchReducer({
            test: 'blah blah'
        }, {
            type: 'NOT_EQUAL_TO_ANYTHING'
        })).to.eql({
            test: 'blah blah'
        });
    });

    it('returns the new payload list to search results', () => {
        let recipeList = [{
            title: 'recipe1'
        }, {
            title: 'recipe2'
        }];
        expect(SearchReducer(null, {
            type: SEARCH,
            payload: recipeList
        })).to.eql(recipeList);
    })

});