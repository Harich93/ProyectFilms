import { applyMiddleware, combineReducers, compose, createStore  } from "redux";
import thunk from "redux-thunk";
import { moviesReducer } from "../Reducers/moviesRecuder";


const reducers = combineReducers({
    'moviesR' : moviesReducer 
});

const composeEnhancers =  ( window as any ).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )

);

export type RootState = ReturnType<typeof store.getState>