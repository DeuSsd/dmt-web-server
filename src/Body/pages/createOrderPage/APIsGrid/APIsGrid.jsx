import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { DragDropContext } from "react-beautiful-dnd";
import style from "./APIsGrid.module.scss"
import APIsContainer from "./components/APIsContainer/APIsContainer";

const APIsGrid = (props) => {
    // debugger
    let APIsColumnsItems = props.APIsColumnsOrder.map((APiColumn, index) => {
        let ss = props.APIsColumns[APiColumn].id
        // debugger
        return (
            <Droppable droppableId={props.APIsColumns[APiColumn].id}>
                {(provided) => (
                    <APIsContainer
                        innerRef={provided.innerRef}
                        {...provided.droppableProps}
                        key={props.APIsColumns[APiColumn].id}
                        APIsColumn={props.APIsColumns[APiColumn]}
                        APIs={props.APIs}>
                        index={index}
                        {provided.placeholder}
                    </APIsContainer>
                )
                }
            </Droppable>
        )
    })

    // debugger
    return (

        <DragDropContext

        >
            <div
             className={style.APIsGrid}>
                {APIsColumnsItems}
            </div>

        </DragDropContext>

    )
}


export default APIsGrid;