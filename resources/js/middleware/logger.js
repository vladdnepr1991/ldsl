const logger = store => next => action => {
    console.log(action.type);
    console.info('dispatchong', action);

    let result = next(action);

    console.log('next state', store.getState());
    console.groupEnd();

    return result;
};

export default logger;
