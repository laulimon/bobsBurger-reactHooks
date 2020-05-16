import React, { Fragment, useContext } from "react"
import { stateContext, dispatchContext } from "./Main"
import constants from "../constants/index"

export default () => {
    return (
        <Fragment>
            <nav className="navbarFix navbar navbar-expand-lg navbar-light bg-light">
                <span style={{ width: "17%", display: "flex", alignItems: "center" }} >
                    <a href="/" className="textoLogo hvr-wobble-horizontal" >
                        <img className="imgLogo" src="/img/BURGER.png" />    BOB'S BURGER
                    </a>
                </span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    </ul>
                    <div className="madeOrder hvr-wobble-horizontal" style={{ width: "20%" }}>
                        <a className="madeOrder hvr-wobble-horizontal" href="/orderBurger"> ORDER A BURGER <i className=" fas fa-hamburger"></i></a>
                    </div>
                    <div className="madeOrder hvr-wobble-horizontal" style={{ width: "20%" }} >
                        <a className="madeOrder hvr-wobble-horizontal" href="/allOrders"> SEE ALL ORDERS <i className=" fas fa-users"></i></a>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}


