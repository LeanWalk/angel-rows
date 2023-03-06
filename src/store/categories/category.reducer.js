import { CATEGORIES_ACTION_TYPES } from './category.types';

export const CATEGORIES_INITIAL_STATE = {
    categories: [],
    isloading: false,
    error: null,
};

export const categoriesReducer = (
    state = CATEGORIES_INITIAL_STATE, 
    action = {}
    ) => {
    const { type, payload } = action;

    switch(type) {
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
            return { ...state, isloading: true };
        case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
            return { ...state, categories: payload, isloading: false };
            case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
                return { ...state, error: payload,  isloading: false };
        default:
            return state;
    }
};