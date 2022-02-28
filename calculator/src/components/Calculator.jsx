import React, { useState } from "react";
import './Calculator.css';
import Container from '@mui/material/Container';
import { Box } from '@mui/material';

export default function Calculator() {
    const [num, setNum] = useState(0);
    const [oldNum, setOldNum] = useState(0);
    const [operator, setOperator] = useState();

    const inputNum = (e) => {
        let inputValue = e.target.value;
        if (num === 0 && inputValue !==',') {
            setNum(inputValue);
            return
        }
        setNum(num + inputValue);
    }

    const clear = (e) => setNum(0);

    const percentage = (e) => setNum(num / 100);

    const invertSign = (e) => setNum(-num);

    const operatorHandler = (e) => {
        let operatorInput = e.target.value;
        setOperator(operatorInput);
        setOldNum(num);
        setNum(0);
    }

    const calculate = (e) => {
        switch (operator) {
            case '/':
                setNum(parseFloat(oldNum) / parseFloat(num));
                break;
            case '*':
                setNum(parseFloat(oldNum) * parseFloat(num));
                break;
            case '+':
                setNum(parseFloat(oldNum) + parseFloat(num));
                break;
            case '-':
                setNum(parseFloat(oldNum) - parseFloat(num));
                break;
            default:
                break;
        }
    }

    return (
        <div>
            <Box m={2} />
            <Container maxWidth='xs'>
                <div className='wrapper'>
                    <Box m={5} />
                    <h1 className='result'>{num}</h1>
                    <button onClick={clear}>AC</button>
                    <button onClick={invertSign}>+/-</button>
                    <button onClick={percentage}>%</button>
                    <button className='operation' onClick={operatorHandler} value={'/'}>/</button>
                    <button className='numbers' onClick={inputNum} value={7}>7</button>
                    <button className='numbers' onClick={inputNum} value={8}>8</button>
                    <button className='numbers' onClick={inputNum} value={9}>9</button>
                    <button className='operation' onClick={operatorHandler} value={'*'}>x</button>
                    <button className='numbers' onClick={inputNum} value={4}>4</button>
                    <button className='numbers' onClick={inputNum} value={5}>5</button>
                    <button className='numbers' onClick={inputNum} value={6}>6</button>
                    <button className='operation' onClick={operatorHandler} value={'-'}>-</button>
                    <button className='numbers' onClick={inputNum} value={1}>1</button>
                    <button className='numbers' onClick={inputNum} value={2}>2</button>
                    <button className='numbers' onClick={inputNum} value={3}>3</button>
                    <button className='operation' onClick={operatorHandler} value={'+'}>+</button>
                    <button className='number0' onClick={inputNum} value={0}>0</button>
                    <button className='numbers' onClick={inputNum} value={"."}>,</button>
                    <button className='operation' onClick={calculate}>=</button>
                </div>
            </Container>
        </div>
    );
}
