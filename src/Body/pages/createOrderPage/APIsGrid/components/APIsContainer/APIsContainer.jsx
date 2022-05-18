import React from "react";
import APiCell from "./APiCell/APiCell";
import style from "./APIsContainer.module.scss"


const APIsContainer = (props) => {

    // let APIsColumn = props.APIsColumn.APIsId
    // debugger
    let APIsItems = props.APIsColumn.APIsId.map(APiID =>{ 

        
        let key=props.APIs[APiID].id
        let APi=props.APIs[APiID]
        // debugger
        return (
        
        <APiCell
            key={key}
            APi={APi}
        />)}
        )

    // debugger
    return (
        <div className={style.APIsContainer}>
            {/* {
                column.tasksID.map(
                    taskID => {
                        return <APiCell
                            key={task.id}
                            task={task}
                        />
                    }
             initialData.tasks[taskID]
                )
            } */}
            {/* {ss(props.initialData)} */}
{/* asds */}
            {APIsItems}

        </div>
    )
}


export default APIsContainer;