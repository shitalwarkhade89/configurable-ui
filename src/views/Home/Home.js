import React from "react";
import "./Home.css"
import Card from "../../components/Card/Card";
import Config from"./../../utils/config.json"

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import { faHouse } from '@fortawesome/free-solid-svg-icons'



function Home (){
    return (      
        <>
      <div className="container">
<h1 className="text-center mt-4 shop-name">{Config.title}</h1>
<p className="text-center bg-warning shop-description ">{Config.description}</p>

<div className="container d-flex justify-content-evenly flex-wrap ">

      <Card/>
</div>
    

        </div>
        </>
       

    )
}

export default Home