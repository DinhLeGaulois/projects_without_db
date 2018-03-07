import React from 'react'
require('../style.scss')

import CalcBtnComponent from '../components/CalcBtnComponent'
import DisplayContainer from '../containers/DisplayContainer'

const App = () => (
    <div className="container">
        <br />
        <div className="panel panel-primary">
            <div className="panel-heading"><h1 align='center'><font color="blue"><b>React/Redux</b></font></h1></div>
            <div className="panel-body">
                <div className="calcBorder">
                    <table align='center'>
                        <tbody>
                            <tr>
                                <td><h2 align='center'><font color="green"><b>Simple Calculator</b></font></h2></td>
                            </tr>
                            <tr>
                                <td><DisplayContainer /></td>
                            </tr>
                            <tr>
                                <td><CalcBtnComponent /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
)

export default App
