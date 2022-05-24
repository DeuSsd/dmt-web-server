import { connect } from "react-redux";
import { getSelectedAPIsParametersCreator } from "../../../../redux/createOrderReducer";
// import { onDragEndCreator } from "../../../../redux/createOrderReducer";
import ConfiguratorAPIs from "./ConfiguratorAPIs";


const mapStateToProps = (state) => {
    return {
        APIs: state.createOrderPage.APIs,
        APIsOrderID: state.createOrderPage.APIsOrderID,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // onDragEnd: (result) => { dispatch(onDragEndCreator(result)) },
        getSelectedAPIsParameters: (result) => { dispatch(getSelectedAPIsParametersCreator(result)) },

    }
}

const ConfiguratorAPIsContainer = connect(mapStateToProps, mapDispatchToProps)(ConfiguratorAPIs)


export default ConfiguratorAPIsContainer;