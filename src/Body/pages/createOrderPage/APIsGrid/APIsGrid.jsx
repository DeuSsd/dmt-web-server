import React from "react";
import style from "./APIsGrid.module.scss"
import APIsContainer from "./components/APIsContainer/APIsContainer";

const APIsGrid = (props) => {
    // debugger
    let APIsColumnsItems = props.APIsColumnsOrder.map(APiColumn =>{
    return <APIsContainer
            key={props.APIsColumns[APiColumn].id}
            APIsColumn={props.APIsColumns[APiColumn]}
            APIs={props.APIs}
        />})


    // debugger
    return (
        <div className={style.APIsGrid}>
            {APIsColumnsItems}
        </div>
    )
}


export default APIsGrid;