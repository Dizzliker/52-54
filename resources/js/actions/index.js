const registerRequested = () => {
    return {
        type: 'FETCH_REGISTER_REQUEST'
    }
};

const registerSuccess = (data) => {
    return {
        type: 'FETCH_REGISTER_SUCCESS',
        payload: data,
    }
};

const registerFailure = (error) => {
    return {
        type: 'FETCH_REGISTER_FAILURE',
        payload: error,
    }
};

const loginRequested = () => {
    return {
        type: 'FETCH_LOGIN_REQUEST',
    };
};

const loginSuccess = (data) => {
    return {
        type: 'FETCH_LOGIN_SUCCESS',
        payload: data,
    }
};

const loginFailure = (error) => {
    return {
        type: 'FETCH_LOGIN_FAILURE',
        payload: error,
    }
};

const fetchRegister = (registerService, dispatch) => (formData) => () => {
    dispatch(registerRequested());
    registerService.fetchRegister(formData)
        .then(({data}) => {
            dispatch(registerSuccess(data));
        })
        .catch(error => {
            dispatch(registerFailure(error));
        });
};

const fetchLogin = (loginService, dispatch) => (formData) => () => {
    dispatch(loginRequested());
    loginService.fetchLogin(formData)
        .then(({data}) => {
            dispatch(loginSuccess(data));
        })  
        .catch(error => {
            dispatch(loginFailure(error));
        });
};

export {
    fetchRegister,
    fetchLogin,
};