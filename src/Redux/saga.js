import {put, takeLatest} from 'redux-saga/effects';
import { CREATE_USER_START, LOGIN_USER_START, VERIFY_USER_START } from './constants';
import { createUserError, createUserSuccess, loginUserError, loginUserSuccess, verifyUserError, verifyUserSuccess } from './action';
import { createUser, loginUser, verifyUser } from './service';

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

function* loginUserSaga({payload}){
    try {
        const ress =  yield loginUser(payload);
        // console.log(ress)
        yield put(loginUserSuccess(ress));
    } catch (error) {
        yield put(loginUserError(error.message));
    }
}



function* Saga(){
    yield takeLatest(CREATE_USER_START,createUserSaga);
    yield takeLatest(VERIFY_USER_START,verifyUserSaga);
    yield takeLatest(LOGIN_USER_START,loginUserSaga);
}

export default Saga;