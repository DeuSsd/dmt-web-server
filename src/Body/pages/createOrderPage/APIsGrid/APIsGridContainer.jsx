import { connect } from "react-redux";
import { getAllAPIsCreator, getAPIsThunkCreator, onDragEndCreator } from "../../../../redux/createOrderReducer";
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
        getAllAPIs: () => { dispatch(getAllAPIsCreator()) },
        getAPIsThunkCreator: (data) => { dispatch(getAPIsThunkCreator(data)) }
    }
}


const APIsGridContainer = connect(mapStateToProps, mapDispatchToProps)(APIsGrid)


export default APIsGridContainer;