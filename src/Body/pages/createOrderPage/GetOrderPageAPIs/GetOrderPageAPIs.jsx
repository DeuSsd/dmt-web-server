import React from "react";
import PreviewContainerAPI from "./components/PreviewContainerAPI/PreviewContainerAPI";
// import ConfiguratorContainerAPI from "../ConfiguratorAPIs/components/ConfiguratorContainerAPI/ConfiguratorContainerAPI";
import style from "./GetOrderPageAPIs.module.scss"


// TODO сделать кнопку свернуть/развернуть
class GetOrderPageAPIs extends React.Component {
    componentDidMount() {
        this.props.getResultFileCreator()
    }


    ConfiguratorAPiItemsRender = () => (
        this.props.APIsOrderID.map((APiID) => {
            return (
                <PreviewContainerAPI
                    APiID={APiID}
                    key={APiID}
                    API={this.props.APIs[APiID]}
                />
            )
        }
        )
    )
    render() {

        // debugger
        return (
            <div>
                <div
                    className={style.GetOrderPageAPIs}>
                    {this.ConfiguratorAPiItemsRender()}
                    {/* dsd */}
                </div>
            </div>
        )
    }
}

export default GetOrderPageAPIs;

// // TODO сделать кнопку свернуть/развернуть
// const GetOrderPageAPIs = (props) => {
//     let ConfiguratorAPiItems = props.APIsOrderID.map((APiID) => {
//         return (
//             <PreviewContainerAPI
//                 APiID={APiID}
//                 key={APiID}
//                 API={props.APIs[APiID]}
//             />
//         )
//     })

//     // debugger
//     return (
//         <div>
//             <div
//                 className={style.GetOrderPageAPIs}>
//                 {ConfiguratorAPiItems}
//                 {/* dsd */}
//             </div>
//         </div>
//     )
// }

// export default GetOrderPageAPIs;