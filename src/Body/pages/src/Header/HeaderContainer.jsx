import { connect } from "react-redux";
import { logOutCreator } from "../../../../redux/authorizationReducer";
import Header from "./Header";


const mapStateToProps = (state) => {
    return {
        userName: state.authorization.name,
        tabPages: state.createOrderPage.Pages,
        selectedPage: state.createOrderPage.SelectedPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogOutClick: () => { dispatch(logOutCreator()) },
    }
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header)


export default HeaderContainer;