import { applyMiddleware, combineReducers, compose, createStore  } from "redux";
import thunk from "redux-thunk";

import { activeReducer, loadReducer, moviesReducer, searchReducer, modalReducer, seriesReducer } from "../reducers/reducers";
import { activeSerieReducer } from '../reducers/activeSerieReducer';

const reducers = combineReducers({
    'moviesR'      : moviesReducer,
    'activeR'      : activeReducer,
    'activeSerieR' : activeSerieReducer,
    'loadR'        : loadReducer,
    'searchR'      : searchReducer,
    'modalR'       : modalReducer,
    'seriesR'      : seriesReducer,
});

const composeEnhancers =  ( window as any ).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )

);

export type RootState = ReturnType<typeof store.getState>