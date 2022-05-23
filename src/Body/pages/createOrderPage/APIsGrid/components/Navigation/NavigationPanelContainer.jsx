import { connect } from "react-redux";
import NavigationPanel from "./NavigationPanel";


const mapStateToProps = (state) => {
    return {
        // APIs: state.createOrderPage.APIs,
        // APIsOrderID: state.createOrderPage.APIsOrderID,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // onDragEnd: (result) => { dispatch(onDragEndCreator(result)) },
    }
}

const NavigationPanelContainer = connect(mapStateToProps, mapDispatchToProps)(NavigationPanel)


export default NavigationPanelContainer;