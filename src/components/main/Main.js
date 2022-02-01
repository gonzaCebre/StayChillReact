import React from "react";
import img from '../../media/img/landing.jpg';
import Categories from "./Categories";
import Images from "./Images";

const Main = () => {

    return (
        <div className="main">
            <div className="img-container"><img src={img} alt="" className="img-main" /></div>
            <h2 className="title-main">¿Qué estás buscando?</h2>
            <Categories />
            <Images />
        </div>

    )
}

export default Main;