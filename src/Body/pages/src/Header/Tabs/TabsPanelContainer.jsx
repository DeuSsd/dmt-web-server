import { connect } from "react-redux";
import { onTabPageClickCreator } from "../../../../../redux/createOrderReducer";
import TabsPanel from "./TabsPanel";

const mapStateToProps = (state) => {
    return {
        tabPages: state.createOrderPage.Pages,
        selectedPage: state.createOrderPage.SelectedPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onTabPageClickCreator: tab => dispatch(onTabPageClickCreator(tab)),
    }
}
const TabsPanelContainer = connect(mapStateToProps, mapDispatchToProps)(TabsPanel)


export default TabsPanelContainer;