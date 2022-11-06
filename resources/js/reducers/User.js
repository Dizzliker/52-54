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

                return this.getData();
            case 'FETCH_REGISTER_SUCCESS':
                this.setData({
                    ...action.payload,
                    loading: false,
                    error: false,
                });

                return this.getData();
            case 'FETCH_REGISTER_FAILURE':
                this.setData({
                    ...action.payload,
                    loading: false,
                    error: true,
                });

                return this.getData();
            case 'FETCH_LOGIN_REQUEST':
                this.setData({
                    loading: true,
                    error: false,
                });

                return this.getData();
            case 'FETCH_LOGIN_SUCCESS':
                this.setData({
                    loading: false,
                    error: false,
                    ...action.payload,
                });

                return this.getData();
            case 'FETCH_LOGIN_FAILURE':
                this.setData({
                    loading: false,
                    error: action.payload,
                });

                return this.getData();
            default:
                return state.authUser;
        }
    }
};