import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";
import createSagaMiddleware from 'redux-saga';
import Saga from "./saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer:reducer,
    middleware:[sagaMiddleware],
    devTools:false
})

sagaMiddleware.run(Saga);

export default store