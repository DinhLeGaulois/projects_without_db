import React from "react";
import PropTypes from 'prop-types';
import {
    ADD, SUB, MUL, DIV, MOD, EQUAL,
    ANS, FIRST_NUM, SECOND_NUM, OPERATOR
} from '../constants'

const DisplayComponent = ({ val1, val2, op, previousStep, activeStep, result }) => {
    const operatorSign = (op) => {
        if (op == ADD) return "+"
        else if (op == SUB) return "-"
        else if (op == MUL) return "*"
        else if (op == DIV) return "/"
        else if (op == MOD) return "%"
        return ""
    }

    const toDisplay = () => {
        if (previousStep == EQUAL) {
            if (val1.length == 0) return result
            else return val1
        }
        else if (previousStep == OPERATOR) {
            return val1 + " " + operatorSign(op) + " " + val2
        }
        else if (previousStep == ANS) return val1
        else if (previousStep == FIRST_NUM) return val1
    }

    return (
        <div className="displayArea"> {toDisplay()} </div>
    )
}

DisplayComponent.propTypes = {
    val1: PropTypes.string,
    val2: PropTypes.string,
    op: PropTypes.string,
    previousStep: PropTypes.string,
    activeStep: PropTypes.string,
    result: PropTypes.string
}

export default DisplayComponent;
