import { connect } from "react-redux";
import { onTabPageClickCreator, updateSelectedApisCreator } from "../../../../../../redux/createOrderReducer";
import NavigationPanel from "./NavigationPanel";


const mapStateToProps = (state) => {
    return {
        // APIs: state.createOrderPage.APIs,
        // APIsOrderID: state.createOrderPage.APIsOrderID,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onCangeTabCrator: tab => dispatch(onTabPageClickCreator(tab)),
        updateSelectedApisCreator: () => dispatch(updateSelectedApisCreator())
    }
}

const NavigationPanelContainer = connect(mapStateToProps, mapDispatchToProps)(NavigationPanel)


export default NavigationPanelContainer;