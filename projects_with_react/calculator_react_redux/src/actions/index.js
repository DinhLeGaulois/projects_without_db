import { FIRST_NUM, SECOND_NUM, OPERATOR, EQUAL, ANS, CE } from '../constants'

export const firstNUM2Reducer = (val) => ({ type: FIRST_NUM, val })

export const secondNUM2Reducer = (val) => ({ type: SECOND_NUM, val })

export const setNumber = (val) => {
    return (dispatch, getState) => {
        let state = getState()
        if (state.calc.activeStep == FIRST_NUM) {
            dispatch(firstNUM2Reducer(val))
        }
        else if (state.calc.activeStep == SECOND_NUM)
            dispatch(secondNUM2Reducer(val))
    }
}

export const operator = (op) => dispatch => dispatch({ type: OPERATOR, data: op })

export const equal = () => dispatch => dispatch({ type: EQUAL })

export const ans = () => dispatch => dispatch({ type: ANS })

export const ce = () => dispatch => dispatch({ type: CE })