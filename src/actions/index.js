import * as actions from './types';

export const apiGetImage = img => ({
    type: actions.API_GET_IMAGE,
    payload: { img }
})