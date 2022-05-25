import { connect } from "react-redux";
// import { onDragEndCreator } from "../../../../redux/createOrderReducer";
import ConfiguratorPreviewAPIs from "./ConfiguratorPreviewAPIs";


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

const ConfiguratorPreviewAPIsContainer = connect(mapStateToProps, mapDispatchToProps)(ConfiguratorPreviewAPIs)


export default ConfiguratorPreviewAPIsContainer;