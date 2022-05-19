import { connect } from "react-redux";
import { onTabPageClickCreator } from "../../../../redux/createOrderReducer";
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
    onTabPageClickCreator: tab => dispatch(onTabPageClickCreator(tab)),
    }
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header)


export default HeaderContainer;