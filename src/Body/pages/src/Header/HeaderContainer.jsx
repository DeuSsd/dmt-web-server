import { connect } from "react-redux";
import Header from "./Header";


const mapStateToProps = (state) => {
    return {
        userName: state.authorization.name,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header)


export default HeaderContainer;