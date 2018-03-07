import { ADD, SUB, MUL, DIV, MOD, FIRST_NUM, SECOND_NUM, EQUAL, ANS, OPERATOR, CE } from '../constants';

const evalExpression = (num1, num2, op) => {
    let result = ""
    let val1 = parseFloat(num1)
    let val2 = parseFloat(num2)
    if (op == ADD) result = (val1 + val2).toString()
    else if (op == SUB) result = (val1 - val2).toFixed(2).toString()
    else if (op == MUL) result = (val1 * val2).toFixed(2).toString()
    else if (op == DIV) result = (val1 / val2).toFixed(2).toString()
    else if (op == MOD) result = (val1 % val2).toFixed(2).toString()
    return result
}

const initialStates = {
    val1: "",
    firstValStarted: false,
    val2: "",
    op: "",
    previousStep: FIRST_NUM,
    activeStep: FIRST_NUM,
    result: ""
}

const calcBtnReducers = (state = initialStates, action) => {
    switch (action.type) {
        case FIRST_NUM: {
            // the order of "state.val1 + action.data" should not be changed
            return Object.assign({}, state, {
                val1: state.firstValStarted ? state.val1 + action.val : action.val, val2: "", firstValStarted: true, op: ""
            })
        }
        case SECOND_NUM: {
            // the order of "state.val2 + action.data" should not be changed
            return Object.assign({}, state, { val2: state.val2 + action.val })
        }
        case OPERATOR: {
            return Object.assign({}, state, { op: action.data, previousStep: OPERATOR, activeStep: SECOND_NUM })
        }
        case EQUAL: {
            return Object.assign({}, state, {
                result: evalExpression(state.val1, state.val2, state.op), val1: evalExpression(state.val1, state.val2, state.op),
                firstValStarted: false, op: "", val2: "", previousStep: EQUAL, activeStep: FIRST_NUM
            })
        }
        case ANS: {
            return Object.assign({}, state, { val1: state.result, op: "", val2: "", firstValStarted: false, previousStep: ANS, activeStep: OPERATOR })
        }
        case CE: {
            return Object.assign({}, state, state = initialStates)
        }
    }
    return state;
}

export default calcBtnReducers