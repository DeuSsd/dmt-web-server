import { connect } from "react-redux";
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
    }
}

const ConfiguratorAPIsContainer = connect(mapStateToProps, mapDispatchToProps)(ConfiguratorAPIs)


export default ConfiguratorAPIsContainer;