import React from "react";
import ConfiguratorContainerAPI from "../ConfiguratorAPIs/components/ConfiguratorContainerAPI/ConfiguratorContainerAPI";
import NavigationPanelContainer from "./components/Navigation/NavigationPanelContainer";
import style from "./ConfiguratorAPIs.module.scss"

// TODO сделать кнопку свернуть/развернуть
class ConfiguratorAPIs extends React.Component {



    componentDidMount() {
        // debugger
        this.props.getSelectedAPIsParametersThunkCreator(({
            "task_id": "1123123",
            "user_id": "2312421",
            "insides": this.props.SelectedAPIs
        }))
    }


    ConfiguratorAPiItemsRender = (props) => (
        props.APIsOrderID.map((APiID) => {
            return (
                <ConfiguratorContainerAPI
                    APiID={APiID}
                    key={APiID}
                    API={props.APIs[APiID]}
                />
            )
        })
    )
    render() {

        // debugger
        return (
            <div>
                <NavigationPanelContainer
                    pathLinkPrevious={this.props.pathLinkPrevious}
                    pathLinkNext={this.props.pathLinkNext}
                    PreviousTab={this.props.PreviousTab}
                    // SelectedTab={props.SelectedTab}
                    NextTab={this.props.NextTab}
                />
                <div className={style.ConfiguratorAPIs}>
                    {this.ConfiguratorAPiItemsRender(this.props)}
                </div>
                <NavigationPanelContainer
                    pathLinkPrevious={this.props.pathLinkPrevious}
                    pathLinkNext={this.props.pathLinkNext}
                    PreviousTab={this.props.PreviousTab}
                    // SelectedTab={props.SelectedTab}
                    NextTab={this.props.NextTab}
                />
            </div>
        )
    }
}

export default ConfiguratorAPIs;
// // TODO сделать кнопку свернуть/развернуть
// const ConfiguratorAPIs = (props) => {
//     let ConfiguratorAPiItems = props.APIsOrderID.map((APiID) => {
//         return (
//             <ConfiguratorContainerAPI
//                 APiID={APiID}
//                 key={APiID}
//                 API={props.APIs[APiID]}
//             />
//         )
//     })

//     // debugger
//     return (
//         <div>
//             <NavigationPanelContainer
//                 pathLinkPrevious={props.pathLinkPrevious}
//                 pathLinkNext={props.pathLinkNext}
//                 PreviousTab={props.PreviousTab}
//                 // SelectedTab={props.SelectedTab}
//                 NextTab={props.NextTab}
//             />
//             <div className={style.ConfiguratorAPIs}>
//                 {ConfiguratorAPiItems}
//             </div>
//             <NavigationPanelContainer
//                 pathLinkPrevious={props.pathLinkPrevious}
//                 pathLinkNext={props.pathLinkNext}
//                 PreviousTab={props.PreviousTab}
//                 // SelectedTab={props.SelectedTab}
//                 NextTab={props.NextTab}
//             />
//         </div>
//     )
// }

// export default ConfiguratorAPIs;

{/* <Button
// actionOnClick={props.onSignUpClick}
actionOnClick={props.onSignUpClick}
text="Sign Up"
/> */}