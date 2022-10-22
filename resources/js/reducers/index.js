import User from "./User";

const reducer = (state, action) => {
    return {
        authUser: User.update(state, action),
    };
};

export default reducer;