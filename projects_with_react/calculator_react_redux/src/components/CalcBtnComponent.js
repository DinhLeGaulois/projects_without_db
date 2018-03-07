import React from "react"
import {
    ZERO, ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE,
    ADD, SUB, MUL, DIV, MOD, EQUAL, ANS, CE
} from '../constants'

import CalcBtnContainer from '../containers/CalcBtnContainer'

const CalcBtnComponent = () => (
    <div>
        <table align="center">
            <tbody>
                <tr>
                    <td><CalcBtnContainer btnOption="SEVEN">7</CalcBtnContainer></td>
                    <td><CalcBtnContainer btnOption="EIGHT">8</CalcBtnContainer></td>
                    <td><CalcBtnContainer btnOption="NINE">9</CalcBtnContainer></td>
                    <td><CalcBtnContainer btnOption="DIV">/</CalcBtnContainer></td>
                </tr>
                <tr>
                    <td><CalcBtnContainer btnOption="FOUR">4</CalcBtnContainer></td>
                    <td><CalcBtnContainer btnOption="FIVE">5</CalcBtnContainer></td>
                    <td><CalcBtnContainer btnOption="SIX">6</CalcBtnContainer></td>
                    <td><CalcBtnContainer btnOption="MUL">*</CalcBtnContainer></td>
                </tr>
                <tr>
                    <td><CalcBtnContainer btnOption="ONE">1</CalcBtnContainer></td>
                    <td><CalcBtnContainer btnOption="TWO">2</CalcBtnContainer></td>
                    <td><CalcBtnContainer btnOption="THREE">3</CalcBtnContainer></td>
                    <td><CalcBtnContainer btnOption="SUB">-</CalcBtnContainer></td>
                </tr>
                <tr>
                    <td><CalcBtnContainer btnOption="ZERO">0</CalcBtnContainer></td>
                    <td><CalcBtnContainer btnOption="MOD">%</CalcBtnContainer></td>
                    <td><CalcBtnContainer btnOption="CE">CE</CalcBtnContainer></td>
                    <td><CalcBtnContainer btnOption="ADD">+</CalcBtnContainer></td>
                </tr>
                <tr>
                    <td><CalcBtnContainer btnOption="ANS">Ans</CalcBtnContainer></td>
                    <td></td>
                    <td></td>
                    <td><CalcBtnContainer btnOption="EQUAL">=</CalcBtnContainer></td>
                </tr>
            </tbody>
        </table>
    </div >
)

export default CalcBtnComponent
