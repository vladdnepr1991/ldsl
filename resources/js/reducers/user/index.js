const defaultState = {
    token: ''
};

const user = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_TOKEN":
            return {
                ...state,
                token: action.token,
            };

        default:
            return state;
    }
};

export default user;
