

import { connect } from "react-redux";
import SignUp from "./signUp";
import { loginActions } from '../../store/actions';
import { getLogin } from '../../store/reducers';



const mapStateToProps = state => ({
    login: getLogin(state)
});



const mapDispatchToProps = {
    ...loginActions

};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp);
