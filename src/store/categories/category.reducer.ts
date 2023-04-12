import { AnyAction } from 'redux';

import { Category } from './category.types';

import { 
    fetchCategoriesStart, 
    fetchCategoriesSuccess, 
    fetchCategoriesFailed 
} from './category.action';

export type CategoriesState = {
    readonly categories: Category[];
    readonly isloading: boolean;
    readonly error: Error | null; 
}

export const CATEGORIES_INITIAL_STATE: CategoriesState = {
    categories: [],
    isloading: false,
    error: null,
};

export const categoriesReducer = (
    state = CATEGORIES_INITIAL_STATE, 
    action: AnyAction
    ): CategoriesState => {
     if(fetchCategoriesStart.match(action)) {
        return { ...state, isloading: true };
        }

    if(fetchCategoriesSuccess.match(action)) {
        return { ...state, categories: action.payload, isloading: false };
        }

    if(fetchCategoriesFailed.match(action)) {
        return { ...state, error: action.payload,  isloading: false };
        }

    return state;
};