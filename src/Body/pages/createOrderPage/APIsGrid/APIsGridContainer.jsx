import { connect } from "react-redux";
import { getAllAPIsCreator, getAPIsThunkCreator, getTokenCreator, onDragEndCreator } from "../../../../redux/createOrderReducer";
import APIsGrid from "./APIsGrid";


const mapStateToProps = (state) => {
    return {
        APIs: state.createOrderPage.APIs,
        APIsColumns: state.createOrderPage.APIsColumns,
        APIsColumnsOrder: state.createOrderPage.APIsColumnsOrder,
        getToken: () =>  ({token: state.createOrderPage.token}), //function
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTokenCreator: () => dispatch(getTokenCreator()),
        onDragEnd: (result) => { dispatch(onDragEndCreator(result)) },
        getAllAPIs: () => { dispatch(getAllAPIsCreator()) },
        getAPIsThunkCreator: (data) => { dispatch(getAPIsThunkCreator(data)) }
    }
}


const APIsGridContainer = connect(mapStateToProps, mapDispatchToProps)(APIsGrid)


export default APIsGridContainer;