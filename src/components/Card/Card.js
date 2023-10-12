import React from "react";
import "./Card.css"
import Config from"./../../utils/config.json"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import { faHouse } from '@fortawesome/free-solid-svg-icons'



function Card (){
    return (<>



    {
        Config.services.map((servicesData,index) =>{
        
            const {title,description,img} = servicesData
            return(
               <div className="">

                <div className="card m-3 card-cont shadow" key={index}>
                    <div className="card-body">
                        <img src={img}  className="img"/>
                        <h3 className="card-title">{title}</h3>
                        <p className="card-text">{description}</p>
                    </div>
                </div>
               </div>
                
            )

        })
    }

    </>
    )}
    export default Card