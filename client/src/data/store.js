import {BehaviorSubject} from "rxjs";
import {IS_LOADING, SET_PREFERENCE} from "./actions";

const INITIAL_VALUES = {
    isLoading : false,
    moviePreference : {},
};
const LOCAL_STORAGE_KEY = 'netrxis';

const gatherInitValue = () => {
    if(localStorage.getItem(LOCAL_STORAGE_KEY)){
        return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    }
    return INITIAL_VALUES;
};
export const store$ = new BehaviorSubject(gatherInitValue());

export const dispatch = (action) => {
    const { type, payload } = action;
    const state = store$.getValue();

    let updatedState;
    switch(type){
        case IS_LOADING:
            updatedState = {...state, isLoading : payload};
            break;
        case SET_PREFERENCE:
            const {movieName, preference} = payload;
            updatedState = {
                ...state,
                moviePreference: {...state.moviePreference, [movieName] : preference}
            }
            break;
        default:
            updatedState = {...state};
    }

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedState));
    store$.next(updatedState)
};
