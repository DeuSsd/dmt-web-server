import { connect } from "react-redux";
import { getResultFileCreator } from "../../../../redux/createOrderReducer";
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
       
        getResultFile: () => { dispatch(getResultFileCreator()) },
    }
}

const GetOrderPageAPIsContainer = connect(mapStateToProps, mapDispatchToProps)(GetOrderPageAPIs)


export default GetOrderPageAPIsContainer;