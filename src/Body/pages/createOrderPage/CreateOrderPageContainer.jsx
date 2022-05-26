import { connect } from "react-redux";
import { getTokenCreator } from "../../../redux/createOrderReducer";
import CreateOrderPage from "./CreateOrderPage";


const mapStateToProps = (state) => {
    return {
        tabLinks: state.createOrderPage.TabLinks,
        statusAuth: state.createOrderPage.statusAuth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTokenCreator: () => dispatch(getTokenCreator()),

    }
}

const CreateOrderPageContainer = connect(mapStateToProps, mapDispatchToProps)(CreateOrderPage)


export default CreateOrderPageContainer;