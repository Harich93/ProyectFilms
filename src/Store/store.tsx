import { applyMiddleware, combineReducers, compose, createStore  } from "redux";
import thunk from "redux-thunk";

import { activeReducer, loadReducer, moviesReducer, searchReducer } from "../Reducers/reducers";


const reducers = combineReducers({
    'moviesR' : moviesReducer,
    'activeR' : activeReducer,
    'loadR'   : loadReducer,
    'searchR' : searchReducer
});

const composeEnhancers =  ( window as any ).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )

);

export type RootState = ReturnType<typeof store.getState>