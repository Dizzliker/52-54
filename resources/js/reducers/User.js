export default class User {
    constructor() {
        this._data = {};
        this.actions = {

        };
    }

    static getData() {
        return this._data;
    }

    static setData(newData) {
        this._data = newData;
    }

    static update = (state, action) => {
        if (state === undefined) {
            this.setData({
                loading: true,
                error: false,
            });
            return this.getData();
        }

        switch(action.type) {
            case 'FETCH_REGISTER_REQUEST':
                this.setData({
                    loading: true,
                    error: false,
                });
            case 'FETCH_REGISTER_SUCCESS':
                this.setData({
                    ...action.payload,
                    loading: false,
                    error: false,
                });
            case 'FETCH_REGISTER_FAILURE':
                this.setData({
                    loading: false,
                    error: true,
                });
            case 'FETCH_LOGIN_REQUEST':
                this.setData({
                    loading: true,
                    error: false,
                });
            case 'FETCH_LOGIN_SUCCESS':
                this.setData({
                    loading: false,
                    error: false,
                    ...action.payload,
                });
            case 'FETCH_LOGIN_FAILURE':
                this.setData({
                    loading: false,
                    error: action.payload,
                });
            default:
                return state.authUser;
        }

        return this.getData();
    }
};