import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import reducer from '../reducers';

export default function configureStore() {
    const sagaMiddleware = createSagaMiddleware();
    return {
        ...createStore(reducer, composeWithDevTools(applyMiddleware(sagaMiddleware))),
        runSaga: sagaMiddleware.run,
    };
}
