import {put, takeLatest} from 'redux-saga/effects';
import { CREATE_USER_START, VERIFY_USER_START } from './constants';
import { createUserError, createUserSuccess, verifyUserError, verifyUserSuccess } from './action';
import { createUser, verifyUser } from './service';

function* createUserSaga({payload}){
    try {
        const res =  yield createUser(payload);
        // console.log(res)
        yield put(createUserSuccess(res.data));
    } catch (error) {
        yield put(createUserError(error.message));
    }
}

function* verifyUserSaga({payload}){
    try {
        const ress =  yield verifyUser(payload);
        // console.log(ress)
        yield put(verifyUserSuccess(ress));
    } catch (error) {
        yield put(verifyUserError(error.message));
    }
}



function* Saga(){
    yield takeLatest(CREATE_USER_START,createUserSaga);
    yield takeLatest(VERIFY_USER_START,verifyUserSaga);
}

export default Saga;