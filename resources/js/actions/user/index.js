export const addToken = token => dispatch => {
    localStorage.setItem('TOKEN', token);

    dispatch({
       type: 'ADD_TOKEN',
       token,
    });
};

export const setTokenFromStorage = () => dispatch => {
    dispatch(addToken(localStorage.getItem('TOKEN')));
};
