import * as actions from './actions/types';

export default function reducer(state = [], action) {
    switch (action.type) {
        case actions.KEEP_IMAGE:
            return {
                ...state,
                img: action.payload.img
            };
        default:
            return state;
    }
}