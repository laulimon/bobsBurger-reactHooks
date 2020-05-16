import React, { Fragment, useEffect, useState } from "react"
import axios from "axios"


export default () => {
    const [allOrders, setAllOrders] = useState([])
    const [flag, SetFlag] = useState(false)

    useEffect(() => {
        axios.get("/api/allOrders")
            .then(res => res.data)
            .then(all => {
                SetFlag(true)
                setAllOrders(all)
            })
    }, [])

    const handleDelete = (i) => {
        axios.delete(`/api/delete/${i}`)
            .then(res => res.data)
            .then(all => setAllOrders(all))
    }
    return (
        <Fragment>
            <>
                <div className="gral" >
                    {flag ? (
                        <>
                            {allOrders.length ? (
                                <section className="secOrder">
                                    <>
                                        {allOrders.map((order => {
                                            return (
                                                <div key={order.id} className="cardOrder card ">
                                                    <div className="cardOrderContent row no-gutters">
                                                        <div className="col-md-4">
                                                            <img src="/img/BURGER.png" className="card-img" alt="..." />
                                                        </div>
                                                        <div className="col-md-8">
                                                            <div className="card-body">
                                                                <h5 className="card-title">Total Cost: {order.total} $</h5>
                                                                <p>Order's items:</p>
                                                                <ul>
                                                                    <li className="card-text" >Salad: {order.salad}</li>
                                                                    <li className="card-text" >Bacon: {order.bacon}</li>
                                                                    <li className="card-text" >Cheese: {order.cheese}</li>
                                                                    <li className="card-text" >Meat: {order.meat}</li>

                                                                </ul>
                                                                <a type="button" onClick={() => handleDelete(order.id)} > <i className="deleteOrder fas fa-trash-alt"></i> <span className="deleteOrder" >Cancel Order</span></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }))}
                                    </>

                                </section>
                            ) : (
                                    <section className="sectionNoOrder">
                                        <div className="card">
                                            <p className="textNoOrder" >You don't have orders yet</p>
                                        </div>
                                    </section>
                                )
                            }
                        </>
                    ) : (
                            <section className="sectionSpinner">

                                <div className="spinner" >
                                    <div className="spinnerOrder spinner-grow text-light" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                    <div className="spinnerOrder spinner-grow text-light" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                    <div className="spinnerOrder spinner-grow text-light" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                </div>
                            </section>

                        )}
                </div>
            </>
        </Fragment>
    )
}
