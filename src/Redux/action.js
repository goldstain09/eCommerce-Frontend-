import { CREATE_USER_ERROR, CREATE_USER_START, CREATE_USER_SUCCESS, VERIFY_USER_ERROR, VERIFY_USER_START, VERIFY_USER_SUCCESS } from "./constants";

export const createUserStart = (userData) => ({
    type:CREATE_USER_START,
    payload:userData
})
export const createUserSuccess = (res) => ({
    type:CREATE_USER_SUCCESS,
    payload:res
})
export const createUserError = (error) => ({
    type:CREATE_USER_ERROR,
    payload:error
})

//verifying user --
export const verifyUserStart = (data) => ({
    type:VERIFY_USER_START,
    payload:data
})
export const verifyUserSuccess = (data) => ({
    type:VERIFY_USER_SUCCESS,
    payload:data
})
export const verifyUserError = (error) => ({
    type:VERIFY_USER_ERROR,
    payload:error
})