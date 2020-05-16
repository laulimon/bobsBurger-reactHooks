import React, { Fragment } from "react"
import { Link } from "react-router-dom"


export default () => {
    return (
        <Fragment>
            <div className="endOrder">
                <div className="textEnd">
                    <p>Your order is already being prepared !!!</p>
                    <Link to="/orderBurger" ><h4 style={{ color: "black" }}>Do you want to order another burger? click here!!!</h4></Link>


                </div>
            </div>
        </Fragment>
    )
}