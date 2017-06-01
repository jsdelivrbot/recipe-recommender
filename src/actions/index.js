import { browserHistory } from 'react-router-dom';
import { SWITCH_AUTH, SEARCH } from './types';
import axios from 'axios';

const ROOT_URL = 'http://food2fork.com/api';
const API_KEY = '705d45535be374ffe751c2a227c1760e';

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
        axios({
            url: `${ROOT_URL}/search?key=${API_KEY}&q=${term}`,
            headers: {
                Origin: 'food2fork.com'
            }
        })
            .then( (response) => {
                console.log(response.data);
                dispatch({
                    type: SEARCH,
                    payload: response.data
                });
            })
            .catch( (response) => {
                console.log(response.data);
            });
    }
}