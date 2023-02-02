import { editableInputTypes } from "@testing-library/user-event/dist/utils"
import React, { useState } from "react"

const viewStyle = {
    backgroundColor: "#F5EEE4",
    borderRadius: 20,
    height: '130px',
    // width: '100px'
    // padding: 5
}

const numStyle = {
    width: '75px',
    height: '80px',
    backgroundColor: "#6787BF",
    borderColor: "transparent",
    borderRadius: 20,
}

const zeroStyle = {
    width: '165px',
    height: '80px',
    backgroundColor: "#6787BF",
    borderColor: "transparent",
    borderRadius: 20,
}

const operatorStyle = {
    width: '75px',
    height: '80px',
    backgroundColor: "#E5EEFC",
    borderColor: "transparent",
    borderRadius: 20,
}

const clearStyle = {
    width: '75px',
    height: '80px',
    backgroundColor: "#F3ECDA",
    borderColor: "transparent",
    borderRadius: 20,
}

const equalStyle = {
    width: '310px',
    height: '80px',
    backgroundColor: "#D04455",
    borderColor: "transparent",
    borderRadius: 20,
}
const tableStyle = {
    backgroundColor: "#393A42",
    borderRadius: 20,
    width: '400px',
    height: '600px',
    fontSize: "35px",
    color: 'white',
}

const historyStyle = {
    color: "#393A42",
    fontSize: "35px",
    textAlign: "center" as 'center'
}

const historyDiv = {
    backgroundColor: "#6787BF",
}

const hListStyle = {
    listStyle: 'none',
    fontSize: "25px",
    textAlign: "center" as 'center'

}

export function Calculator(){
    const [calc, setCalc] = useState("");

    const [results, setResults] = useState<string[]>([])

    function clearCalc(){
        setCalc("");
    }

    function handleResults(){
        const resultsClone = [...results];
        const total = eval(calc);
        const totalExpression = calc + " = " + total
        resultsClone.push(totalExpression);
        clearCalc();
        setResults(resultsClone);
    }

    function append1(){
        const newCalc = calc + "1";
        setCalc(newCalc);
    }

    function append2(){
        const newCalc = calc + "2";
        setCalc(newCalc);
    }
    function append3(){
        const newCalc = calc + "3";
        setCalc(newCalc);
    }

    function append4(){
        const newCalc = calc + "4";
        setCalc(newCalc);
    }
    function append5(){
        const newCalc = calc + "5";
        setCalc(newCalc);
    }

    function append6(){
        const newCalc = calc + "6";
        setCalc(newCalc);
    }
    function append7(){
        const newCalc = calc + "7";
        setCalc(newCalc);
    }

    function append8(){
        const newCalc = calc + "8";
        setCalc(newCalc);
    }
    function append9(){
        const newCalc = calc + "9";
        setCalc(newCalc);
    }

    function append0(){
        const newCalc = calc + "0";
        setCalc(newCalc);
    }

    function appendDecimal(){
        const newCalc = calc + ".";
        setCalc(newCalc);
    }

    function appendAdd(){
        const newCalc = calc + "+";
        setCalc(newCalc);
    }

    function appendSub(){
        const newCalc = calc + "-";
        setCalc(newCalc);
    }
    function appendMult(){
        const newCalc = calc + "*";
        setCalc(newCalc);
    }

    function appendDiv(){
        const newCalc = calc + "/";
        setCalc(newCalc);
    }

    return <>
        <table style={tableStyle}>
            <tr>
            <th colSpan={3} style={viewStyle}>{calc}</th>
            <th><button type="button" onClick={clearCalc} style={clearStyle}>CE</button></th>
            </tr>

            <tr>
                <th><button onClick={append7} style={numStyle} >7</button></th>
                <th><button onClick={append8} style={numStyle}>8</button></th>
                <th><button onClick={append9} style={numStyle}>9</button></th>
                <th><button onClick={appendDiv} style={operatorStyle}>/</button></th>
            </tr>
            <tr>
                <th><button onClick={append4} style={numStyle}>4</button></th>
                <th><button onClick={append5} style={numStyle}>5</button></th>
                <th><button onClick={append6} style={numStyle}>6</button></th>
                <th><button onClick={appendMult} style={operatorStyle}>x</button></th>
            </tr>
            <tr>
                <th><button onClick={append1} style={numStyle}>1</button></th>
                <th><button onClick={append2} style={numStyle}>2</button></th>
                <th><button onClick={append3} style={numStyle}>3</button></th>
                <th><button onClick={appendSub} style={operatorStyle}>-</button></th>
            </tr>
            <tr>
                <th colSpan={2}><button onClick={append0} style={zeroStyle}>0</button></th>
                <th><button onClick={appendDecimal} style={numStyle}>.</button></th>
                <th><button onClick={appendAdd} style={operatorStyle}>+</button></th>
            </tr>
            <tr>
                <th colSpan={4} onClick={handleResults}><button style={equalStyle}>=</button></th>
            </tr>
        </table>
        <div style={historyDiv}>
            <h2 style={historyStyle}>Result History</h2>       
                <ul style={hListStyle}>
                    {results.map(r => <li>{r}</li>)}
                </ul>  
        </div> 
    </>

}