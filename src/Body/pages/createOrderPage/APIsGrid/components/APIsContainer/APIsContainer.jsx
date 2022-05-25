import React from "react";
import { Draggable } from "react-beautiful-dnd";
import APiCell from "./APiCell/APiCell";
import style from "./APIsContainer.module.scss"


const APIsContainer = (props) => {

    // let APIsColumn = props.APIsColumn.APIsId
    // debugger
    let APIsItems = props.APIsColumn.APIsId.map((APiID, index) => {
        // debugger
        let key = props.APIs[APiID].id
        let APi = props.APIs[APiID]
        // debugger
        return (
            <Draggable
                draggableId={props.APIs[APiID].id}
                index={index}>
                {(provided) => (
                    <APiCell
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        innerRef={provided.innerRef}
                        key={key}
                        APi={APi}
                    />
                )}

            </Draggable>
        )
    }
    )

    // debugger
    return (
        <div
            className={style.APIsContainer}
            // {...props}
            ref={props.innerRef}

        >
            <h2>{props.APIsColumn.title}</h2>
            {APIsItems}
        </div>
    )


}


export default APIsContainer;