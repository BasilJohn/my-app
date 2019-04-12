

import { connect } from "react-redux";
import Home from "./home";
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
)(Home);
