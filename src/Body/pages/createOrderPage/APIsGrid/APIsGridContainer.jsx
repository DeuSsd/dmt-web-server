import { connect } from "react-redux";
import { getAllAPIsCreator, onDragEndCreator } from "../../../../redux/createOrderReducer";
import APIsGrid from "./APIsGrid";


const mapStateToProps = (state) => {
    return {
        APIs: state.createOrderPage.APIs,
        APIsColumns: state.createOrderPage.APIsColumns,
        APIsColumnsOrder: state.createOrderPage.APIsColumnsOrder,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDragEnd: (result) => { dispatch(onDragEndCreator(result)) },
        getAllAPIs: (result) => { dispatch(getAllAPIsCreator(result)) },
    }
}

const APIsGridContainer = connect(mapStateToProps, mapDispatchToProps)(APIsGrid)


export default APIsGridContainer;