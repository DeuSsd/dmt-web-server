import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { DragDropContext } from "react-beautiful-dnd";
import style from "./APIsGrid.module.scss"
import APIsContainer from "./components/APIsContainer/APIsContainer";
import NavigationPanelContainer from "./components/Navigation/NavigationPanelContainer";

class APIsGrid extends React.Component {


    componentDidMount() {
        debugger
        this.props.getAPIsThunkCreator(this.props.getToken())
    }

    APIsColumnsItemsRender = (props) => (
       props.APIsColumnsOrder.map((APiColumn, index) => {
            // let ss = this.props.APIsColumns[APiColumn].id
            // debugger
            return (
                <Droppable
                    key={props.APIsColumns[APiColumn].id}
                    droppableId={props.APIsColumns[APiColumn].id}>
                    {(provided) =>
                    // {
                    // debugger
                    //     return 
                    (
                        <APIsContainer
                            innerRef={provided.innerRef}
                            {...provided.droppableProps}
                            key={props.APIsColumns[APiColumn].id}
                            APIsColumn={props.APIsColumns[APiColumn]}
                            index={index}
                            APIs={props.APIs}
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
                        {this.APIsColumnsItemsRender(this.props)}
                    </div>
                </DragDropContext>
            </div>
        )
    }
}

export default APIsGrid;