import { connect } from "react-redux";
// import { onDragEndCreator } from "../../../../redux/createOrderReducer";
import ConfiguratorAPIs from "./ConfiguratorAPIs";


const mapStateToProps = (state) => {
    return {
        // APIs: state.createOrderPage.APIs,
        // APIsColumns: state.createOrderPage.APIsColumns,
        // APIsColumnsOrder: state.createOrderPage.APIsColumnsOrder,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // onDragEnd: (result) => { dispatch(onDragEndCreator(result)) },
    }
}

const ConfiguratorAPIsContainer = connect(mapStateToProps, mapDispatchToProps)(ConfiguratorAPIs)


export default ConfiguratorAPIsContainer;