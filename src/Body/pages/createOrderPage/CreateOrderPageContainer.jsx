import { connect } from "react-redux";
import CreateOrderPage from "./CreateOrderPage";


const mapStateToProps = (state) => {
    return {
        tabLinks: state.createOrderPage.TabLinks
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // onC
    }
}

const CreateOrderPageContainer = connect(mapStateToProps, mapDispatchToProps)(CreateOrderPage)


export default CreateOrderPageContainer;