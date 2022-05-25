import { connect } from "react-redux";
import { getResultFileCreator, getResultFileThunkCreator } from "../../../../redux/createOrderReducer";
// import { onDragEndCreator } from "../../../../redux/createOrderReducer";
import GetOrderPageAPIs from "./GetOrderPageAPIs";


const mapStateToProps = (state) => {
    return {
        APIs: state.createOrderPage.APIs,
        APIsOrderID: state.createOrderPage.APIsOrderID,
        SelectedAPIsAndParameters: state.createOrderPage.SelectedAPIsAndParameters
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
       
        getResultFile: () => { dispatch(getResultFileCreator()) },
        getResultFileThunkCreator: SelectedAPIsAndParameters => dispatch(getResultFileThunkCreator(SelectedAPIsAndParameters)),

    }
}

const GetOrderPageAPIsContainer = connect(mapStateToProps, mapDispatchToProps)(GetOrderPageAPIs)


export default GetOrderPageAPIsContainer;