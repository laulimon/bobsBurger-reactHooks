import React, { Fragment, useContext, useState } from "react"
import { stateContext, dispatchContext } from "./Main"
import { useHistory } from "react-router-dom"
import axios from "axios"

import constants from "../constants/index"


export default () => {
    const state = useContext(stateContext);
    const dispatch = useContext(dispatchContext);
    const history = useHistory();
    const [total, setTotal] = useState(100);
    const [salad, setSalad] = useState(0);
    const [bacon, setBacon] = useState(0);
    const [cheese, setCheese] = useState(0);
    const [meat, setMeat] = useState(0)
    let is = 1
    let ib = 1
    let ic = 1
    let im = 1


    const handleAddItem = (input) => {
        switch (input) {
            case "s":
                setTotal(total + 30);
                setSalad(salad + 1);
                dispatch({ type: constants.ADD_SALAD });
                break
            case "b":
                setTotal(total + 40);
                setBacon(bacon + 1);
                dispatch({ type: constants.ADD_BACON });
                break
            case "c":
                setTotal(total + 40);
                setCheese(cheese + 1);
                dispatch({ type: constants.ADD_CHEESE });
                break
            case "m":
                setTotal(total + 80)
                setMeat(meat + 1);
                dispatch({ type: constants.ADD_MEAT });
                break
            default:
        }
    }

    const handleRemoveItem = (input) => {
        switch (input) {
            case "s":
                if (salad > 0) {
                    setTotal(total - 30)
                    setSalad(salad - 1)
                    dispatch({ type: constants.REMOVE_SALAD })
                }
                break
            case "b":
                if (bacon > 0) {
                    setTotal(total - 40)
                    setBacon(bacon - 1)
                    dispatch({ type: constants.REMOVE_BACON })
                }
                break
            case "c":
                if (cheese > 0) {
                    setTotal(total - 40)
                    setCheese(cheese - 1)
                    dispatch({ type: constants.REMOVE_CHEESE })
                }
                break
            case "m":
                if (meat > 0) {
                    setTotal(total - 80)
                    setMeat(meat - 1)
                    dispatch({ type: constants.REMOVE_MEAT })
                }
                break
            default:
        }
    }
    const handleConfirm = () => {
        if (total > 100) {
            let obj = { salad, bacon, cheese, meat, total }
            axios.post("/api/confirmOrder", obj)
                .then(() => {
                    dispatch({ type: constants.FINISH_ORDER })
                    history.push("/finalOrder")
                }

                )

        }

    }
    return (
        <Fragment>
            <section className="builSection">
                <div className="previewBurger card shadow-lg p-3 mb-5 bg-white rounded">
                    <div className="bread-top">
                        <div className="seeds"></div>
                        <div className="seeds2"></div>
                    </div>
                    <>
                        {(state.salad.length) ? (
                            <>
                                {state.salad.map((salad) => {
                                    return (
                                        <div key={is++} className="salad"></div>
                                    )

                                })}
                            </>
                        ) : null}
                    </>
                    <>
                        {(state.bacon.length) ? (
                            <>
                                {state.bacon.map((bacon) => {
                                    return (
                                        <div key={ib++} className="bacon"></div>
                                    )

                                })}
                            </>
                        ) : null}
                    </>
                    <>
                        {(state.cheese.length) ? (
                            <>
                                {state.cheese.map((cheese) => {
                                    return (
                                        <div key={ic++} className="cheese"></div>
                                    )

                                })}
                            </>
                        ) : null}
                    </>
                    <>
                        {(state.meat.length) ? (
                            <>
                                {state.meat.map((meat) => {
                                    return (
                                        <div key={im++} className="meat"></div>
                                    )
                                })}
                            </>
                        ) : null}
                    </>
                    <div className="bread-bottom"></div>
                </div>

                <div className="previewOrder card shadow-lg p-3  bg-white rounded">
                    <div className="orderView">
                        <div>
                            <label className="paidLabel"  ><i className="fas fa-hand-holding-usd"></i> Current Price = </label>
                            <input className="paid" type="text" placeholder="$$$" value={total} />

                        </div>
                        <button className="confirmButton" onClick={handleConfirm} >CONFIRM ORDER</button>
                    </div>

                    <div className="burgerItems">
                        <div className="itemSalad"> Salad</div>
                        <div className="moreSalad"><button className="builButton" onClick={() => handleAddItem("s")}>+</button> </div>
                        <div className="lessSalas"><button className="builButton" onClick={() => handleRemoveItem("s")} >-</button> </div>
                        <div className="itemBacon"> Bacon</div>
                        <div className="moreBacon"><button className="builButton" onClick={() => handleAddItem("b")} >+</button> </div>
                        <div className="lessBacon"><button className="builButton" onClick={() => handleRemoveItem("b")} >-</button> </div>
                        <div className="itemCheese"> Cheese</div>
                        <div className="moreCheese"><button className="builButton" onClick={() => handleAddItem("c")} >+</button> </div>
                        <div className="lessCheese"><button className="builButton" onClick={() => handleRemoveItem("c")} >-</button> </div>
                        <div className="itemMeat"> Meat</div>
                        <div className="moreMeat"><button className="builButton" onClick={() => handleAddItem("m")} >+</button> </div>
                        <div className="lessMeat"><button className="builButton" onClick={() => handleRemoveItem("m")} >-</button> </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}






