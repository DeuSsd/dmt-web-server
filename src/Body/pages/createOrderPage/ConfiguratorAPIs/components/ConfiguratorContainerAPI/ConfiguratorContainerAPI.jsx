import React from "react";
import style from "./ConfiguratorContainerAPI.module.scss"



const ConfiguratorContainerAPI = (props) => {
    return (
        <div
            className={style.ConfiguratorContainerAPI}
        >
            <div  className={style.header}>
                header
            </div>
            <div className={style.contentAPI}>
               <div className={style.descriptionAPI}>  description API  </div>
               <div className={style.parametersAPI}>   

                    contens PArameters

                </div>
              
            </div>
            
        </div>
    )
}


export default ConfiguratorContainerAPI;