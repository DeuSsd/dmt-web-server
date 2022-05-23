import { connect } from "react-redux";
// import { onDragEndCreator } from "../../../../redux/createOrderReducer";
import GetOrderPageAPIs from "./GetOrderPageAPIs";


const mapStateToProps = (state) => {
    return {
        APIs: state.createOrderPage.APIs,
        APIsOrderID: state.createOrderPage.APIsOrderID,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // onDragEnd: (result) => { dispatch(onDragEndCreator(result)) },
    }
}

const GetOrderPageAPIsContainer = connect(mapStateToProps, mapDispatchToProps)(GetOrderPageAPIs)


export default GetOrderPageAPIsContainer;