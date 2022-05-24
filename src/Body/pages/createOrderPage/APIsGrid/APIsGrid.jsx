import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { DragDropContext } from "react-beautiful-dnd";
import style from "./APIsGrid.module.scss"
import APIsContainer from "./components/APIsContainer/APIsContainer";
import NavigationPanelContainer from "./components/Navigation/NavigationPanelContainer";

class APIsGrid extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    componentDidMount() {
        this.props.getAllAPIs()
    }

    APIsColumnsItemsRender = () => (
        this.props.APIsColumnsOrder.map((APiColumn, index) => {
            // let ss = this.props.APIsColumns[APiColumn].id
            // debugger
            return (
                <Droppable
                    key={this.props.APIsColumns[APiColumn].id}
                    droppableId={this.props.APIsColumns[APiColumn].id}>
                    {(provided) =>
                    // {
                    // debugger
                    //     return 
                    (
                        <APIsContainer
                            innerRef={provided.innerRef}
                            {...provided.droppableProps}
                            key={this.props.APIsColumns[APiColumn].id}
                            APIsColumn={this.props.APIsColumns[APiColumn]}
                            index={index}
                            APIs={this.props.APIs}
                        >
                            {provided.placeholder}
                        </APIsContainer>
                    )
                    }
                    {/* } */}
                </Droppable>
            )
        })
    )
    render() {
        // debugger
        return (


            <div>
                <NavigationPanelContainer
                    // pathLinkPrevious={props.pathLinkPrevious}
                    pathLinkNext={this.props.pathLinkNext}
                    // PreviousTab={props.PreviousTab}
                    // SelectedTab={props.SelectedTab}
                    NextTab={this.props.NextTab}
                />

                <DragDropContext
                    onDragEnd={this.props.onDragEnd}
                >
                    <div
                        className={style.APIsGrid}>
                        {this.APIsColumnsItemsRender()}
                    </div>
                </DragDropContext>
            </div>
        )
    }
}

export default APIsGrid;

// const APIsGrid = (props) => {
//     // debugger

//     let APIsColumnsItems = props.APIsColumnsOrder.map((APiColumn, index) => {
//         // debugger
//         return (
//             <Droppable droppableId={props.APIsColumns[APiColumn].id}>
//                 {(provided) => (
//                     <APIsContainer
//                         innerRef={provided.innerRef}
//                         {...provided.droppableProps}
//                         key={props.APIsColumns[APiColumn].id}
//                         APIsColumn={props.APIsColumns[APiColumn]}
//                         APIs={props.APIs}>
//                         index={index}
//                         {provided.placeholder}
//                     </APIsContainer>
//                 )}
//             </Droppable>
//         )
//     })


//     // debugger
//     return (


//         <div>
//             <NavigationPanelContainer
//                 // pathLinkPrevious={props.pathLinkPrevious}
//                 pathLinkNext={props.pathLinkNext}
//                 // PreviousTab={props.PreviousTab}
//                 // SelectedTab={props.SelectedTab}
//                 NextTab={props.NextTab}
//             />

//             <DragDropContext
//                 onDragEnd={props.onDragEnd}
//             >
//                 <div
//                     className={style.APIsGrid}>
//                     {APIsColumnsItems}
//                 </div>
//             </DragDropContext>
//         </div>
//     )
// }


// export default APIsGrid;