import { connect } from "react-redux";
import APIsGrid from "./APIsGrid";


const mapStateToProps = (state) => {
    return {
        APIs : state.createOrderPage.APIs,
        APIsColumns : state.createOrderPage.APIsColumns,
        APIsColumnsOrder : state.createOrderPage.APIsColumnsOrder,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

const APIsGridContainer = connect(mapStateToProps, mapDispatchToProps)(APIsGrid)


export default APIsGridContainer;