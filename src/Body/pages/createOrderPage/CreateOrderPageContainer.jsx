import { connect } from "react-redux";
import CreateOrderPage from "./CreateOrderPage";


const mapStateToProps = (state) => {
    return {
        userName: state.authorization.name,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

const CreateOrderPageContainer = connect(mapStateToProps, mapDispatchToProps)(CreateOrderPage)


export default CreateOrderPageContainer;