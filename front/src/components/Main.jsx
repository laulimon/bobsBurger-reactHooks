import React, { useReducer } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { initialState, burgerReducers } from "../reducers/burgerReducers"


import Navbar from "../components/Navbar";
import BuildBurger from "../components/BuildBurger";
import Landing from "../components/Landing";
import FinalOrder from "../components/FinalOrder";
import AllOrders from "../components/AllOrders"

export const stateContext = React.createContext();
export const dispatchContext = React.createContext();

export default () => {
    const [state, dispatch] = useReducer(burgerReducers, initialState)
    return (
        <stateContext.Provider value={state}>
            <dispatchContext.Provider value={dispatch} >
                <Navbar />
                <Router>
                    <Switch>
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/orderBurger" component={BuildBurger} />
                        <Route exact path="/finalOrder" component={FinalOrder} />
                        <Route exact path="/allOrders" component={AllOrders} />

                        <Redirect from="/" to="/" />
                    </Switch>
                </Router>
            </dispatchContext.Provider>
        </stateContext.Provider>
    )
}

