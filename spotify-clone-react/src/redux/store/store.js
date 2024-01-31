import {applyMiddleware, combineReducers, createStore} from 'redux'
import {thunk} from "redux-thunk";
import {preferitiReducer, searchDataReducer} from "../reducers/reducers";

const inititalState = {
    likedSongs: [],
    searchData: {
        searchQuery: '',
        searchResults: []
    }
}

const reducersCombiner = combineReducers({

    likedSongs: preferitiReducer,
    searchData: searchDataReducer

})

export const store = createStore(reducersCombiner, inititalState, applyMiddleware(thunk))