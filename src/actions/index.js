import { history } from 'react-router-dom';
import { SWITCH_AUTH, SEARCH } from './types';
import axios from 'axios';

const ROOT_URL = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes';
const API_KEY = '5F1UEJR9oEmshASzHiCgVoGfyEx8p1hF9VijsnplTtxoJEGrWG';

export function signIn () {
    return {
        type: SWITCH_AUTH,
        payload: true
    };
}

export function signOut () {
    return {
        type: SWITCH_AUTH,
        payload: false
    };
}

export function search (term) {
    return function (dispatch) {
        axios.get(`${ROOT_URL}/search?query=${term}`,{
            headers: {
                'X-Mashape-Key': API_KEY
            }
        })
            .then( (response) => {
                console.log(response.data);
                dispatch({
                    type: SEARCH,
                    payload: response.data.results
                });
                console.log('browser should push')
                history.push('/search');
            })
            .catch( (response) => {
                console.log('catch', response.data);
            });
    }
}