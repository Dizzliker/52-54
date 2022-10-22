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
}

const registerFailure = (error) => {
    return {
        type: 'FETCH_REGISTER_FAILURE',
        payload: error,
    }
}

const fetchRegister = (registerService, dispatch) => (formData) => () => {
    dispatch(registerRequested());
    registerService.fetchRegister(formData)
        .then(data => {
            dispatch(registerSuccess(data));
        })
        .catch(error => {
            dispatch(registerFailure(error));
        });
}

export {
    fetchRegister
};