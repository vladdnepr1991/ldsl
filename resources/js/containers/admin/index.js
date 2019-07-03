import { connect } from 'react-redux';
import { addToken } from '../../actions/user/'
import Auth from '../../components/admin/auth/';

const mapStateToProps = state => {
    return {
        user: state.user
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addAuthToken: token => {
            dispatch(addToken(token));
        }
    };
};

const AuthContainer = connect(mapStateToProps, mapDispatchToProps)(Auth);

export default AuthContainer;
