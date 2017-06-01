import { SWITCH_AUTH } from '../actions/types';

export default function (state = false, action) {
    switch (action.type) {
        case SWITCH_AUTH:
            return action.payload;
    }
    return state;
}