import { SEARCH } from '../actions/types';

export default function (state = [], action) {
    console.log('In reducer', action)
    switch (action.type) {
        case SEARCH:
            console.log('returning ' + action.payload)
            return action.payload;
        default:
            return state;
    }
}