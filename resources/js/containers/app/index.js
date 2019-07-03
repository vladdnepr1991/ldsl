import { connect } from 'react-redux';
import { setTokenFromStorage as setToken } from '../../actions/user/'
import App from '../../components/app/';

const mapDispatchToProps = dispatch => {
    return {
        setTokenFromStorage: () => {
            dispatch(setToken());
        }
    };
};

const AppContainer = connect(null, mapDispatchToProps)(App);

export default AppContainer;
