import { connect } from 'react-redux';
import {
    ZERO, ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE,
    ADD, SUB, MUL, DIV, MOD, EQUAL, ANS, CE, FIRST_NUM, SECOND_NUM, OPERATOR
} from '../constants'
import CalcBtn from '../components/CalcBtn';

import { setNumber, operator, equal, ans, ce } from '../actions'

const mapStateToProps = (state) => ({
    val1: state.calc.val1,
    val2: state.calc.val2,
    op: state.calc.op,
    previousStep: state.calc.previousStep,
    activeStep: state.calc.activeStep,
    result: state.calc.result
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onBtnClick: (data) => {
        if (ownProps.btnOption == ZERO)
            dispatch(setNumber("0"))
        else if (ownProps.btnOption == ONE)
            dispatch(setNumber("1"))
        else if (ownProps.btnOption == TWO)
            dispatch(setNumber("2"))
        else if (ownProps.btnOption == THREE)
            dispatch(setNumber("3"))
        else if (ownProps.btnOption == FOUR)
            dispatch(setNumber("4"))
        else if (ownProps.btnOption == FIVE)
            dispatch(setNumber("5"))
        else if (ownProps.btnOption == SIX)
            dispatch(setNumber("6"))
        else if (ownProps.btnOption == SEVEN)
            dispatch(setNumber("7"))
        else if (ownProps.btnOption == EIGHT)
            dispatch(setNumber("8"))
        else if (ownProps.btnOption == NINE)
            dispatch(setNumber("9"))

        else if (ownProps.btnOption == ADD)
            dispatch(operator(ADD))
        else if (ownProps.btnOption == SUB)
            dispatch(operator(SUB))
        else if (ownProps.btnOption == MUL)
            dispatch(operator(MUL))
        else if (ownProps.btnOption == DIV)
            dispatch(operator(DIV))
        else if (ownProps.btnOption == MOD)
            dispatch(operator(MOD))
        else if (ownProps.btnOption == EQUAL)
            dispatch(equal())
        else if (ownProps.btnOption == ANS)
            dispatch(ans())
        else if (ownProps.btnOption == CE)
            dispatch(ce())
    }
})

const CalcBtnContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CalcBtn)

export default CalcBtnContainer
