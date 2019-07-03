import React from 'react';
import { Provider } from 'react-redux'
import configureStore from '../configureStore';
import ReactDOM from 'react-dom';
import AppContainer from '../containers/app/'


const store = configureStore();



ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.getElementById('app')
);
