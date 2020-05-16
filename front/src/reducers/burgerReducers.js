import constants from "../constants/index"


export const initialState = {
    salad: [],
    bacon: [],
    cheese: [],
    meat: [],
}

export const burgerReducers = (state, action) => {
    switch (action.type) {
        case constants.ADD_SALAD:
            return state = { ...state, salad: [...state.salad, "s"] }
        case constants.REMOVE_SALAD:
            return state = { ...state, salad: [...state.salad].slice(0, [...state.salad].length - 1) }
        case constants.ADD_BACON:
            return state = { ...state, bacon: [...state.bacon, "b"] }
        case constants.REMOVE_BACON:
            return state = { ...state, bacon: [...state.bacon].slice(0, [...state.bacon].length - 1) }
        case constants.ADD_CHEESE:
            return state = { ...state, cheese: [...state.cheese, "c"] }
        case constants.REMOVE_CHEESE:
            return state = { ...state, cheese: [...state.cheese].slice(0, [...state.cheese].length - 1) }
        case constants.ADD_MEAT:
            return state = { ...state, meat: [...state.meat, "m"] }
        case constants.REMOVE_MEAT:
            return state = { ...state, meat: [...state.meat].slice(0, [...state.meat].length - 1) }
        case constants.FINISH_ORDER:
            return state = { ...state, salad: [], bacon: [], cheese: [], meat: [] }
        default:
            return state
    }
}


