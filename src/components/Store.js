import {Platform } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import devTools from 'remote-redux-devtools';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import RootReducer from './../Reducers/index';

const middelware = applyMiddleware(thunk,promise,logger);

const Store = createStore(
    RootReducer,
    compose(
        middelware,
        devTools({
            name: Platform.OS,
            hostname: 'locahost',
            port: 5678
        })
    )
)

export default Store;