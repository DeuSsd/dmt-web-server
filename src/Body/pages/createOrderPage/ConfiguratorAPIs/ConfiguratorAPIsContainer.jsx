import { connect } from "react-redux";
import { getSelectedAPIsParametersThunkCreator } from "../../../../redux/createOrderReducer";
// import { onDragEndCreator } from "../../../../redux/createOrderReducer";
import ConfiguratorAPIs from "./ConfiguratorAPIs";


const mapStateToProps = (state) => {
    return {
        APIs: state.createOrderPage.APIs,
        APIsOrderID: state.createOrderPage.APIsOrderID,
        SelectedAPIs: state.createOrderPage.SelectedAPIs
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // onDragEnd: (result) => { dispatch(onDragEndCreator(result)) },
        getSelectedAPIsParametersThunkCreator: (data) => { dispatch(getSelectedAPIsParametersThunkCreator(data)) },

    }
}

const ConfiguratorAPIsContainer = connect(mapStateToProps, mapDispatchToProps)(ConfiguratorAPIs)


export default ConfiguratorAPIsContainer;