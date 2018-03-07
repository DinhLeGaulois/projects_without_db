import { connect } from 'react-redux';
import DisplayComponent from '../components/DisplayComponent';

const mapStateToProps = (state) => ({
    val1: state.calc.val1,
    val2: state.calc.val2,
    op: state.calc.op,
    previousStep: state.calc.previousStep,
    activeStep: state.calc.activeStep,
    result: state.calc.result
})

const DisplayContainer = connect(
    mapStateToProps
)(DisplayComponent)

export default DisplayContainer
