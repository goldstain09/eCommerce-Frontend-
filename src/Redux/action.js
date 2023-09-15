import { CREATE_USER_ERROR, CREATE_USER_START, CREATE_USER_SUCCESS, EDIT_USER_ERROR, EDIT_USER_START, EDIT_USER_SUCCESS, LOGIN_USER_ERROR, LOGIN_USER_START, LOGIN_USER_SUCCESS, USER_IS_LOGINNED_ERROR, USER_IS_LOGINNED_START, USER_IS_LOGINNED_SUCCESS, VERIFY_USER_ERROR, VERIFY_USER_START, VERIFY_USER_SUCCESS } from "./constants";

// create user
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

//verifying user --(with jwt )
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

//Logining user
export const loginUserStart = (data) => ({
    type:LOGIN_USER_START,
    payload:data
})
export const loginUserSuccess = (data) => ({
    type:LOGIN_USER_SUCCESS,
    payload:data
})
export const loginUserError = (error) => ({
    type:LOGIN_USER_ERROR,
    payload:error
})


//for editing user details
export const editUserStart = (data) => ({
    type:EDIT_USER_START,
    payload:data
})
export const editUserSuccess = (data) => ({
    type:EDIT_USER_SUCCESS,
    payload:data
})
export const editUserError = (error) => ({
    type:EDIT_USER_ERROR,
    payload:error
})


//for editing user details
export const userIsLogginnedStart = (data) => ({
    type:USER_IS_LOGINNED_START,
    payload:data
})
export const userIsLogginnedSuccess = (data) => ({
    type:USER_IS_LOGINNED_SUCCESS,
    payload:data
})
export const userIsLogginnedError = (error) => ({
    type:USER_IS_LOGINNED_ERROR,
    payload:error
})