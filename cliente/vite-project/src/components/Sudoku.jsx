import React, { useState } from 'react';
import './SudokuStyle.css';
import { useNavigate } from 'react-router-dom';

const Sudoku = () => {
    const [cells, setCells] = useState(Array(81).fill(''));
    const [status, setStatus] = useState('');
    const [currentSudokuIndex, setCurrentSudokuIndex] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');
    const [currentNumber, setCurrentNumber] = useState(1);
    const navigate = useNavigate();

    const exit = () => {
        navigate('/');
    }

    const predefinedSudokus = [
        [
            5, 3, 0, 0, 7, 0, 0, 0, 0,
            6, 0, 0, 1, 9, 5, 0, 0, 0,
            0, 9, 8, 0, 0, 0, 0, 6, 0,
            8, 0, 0, 0, 6, 0, 0, 0, 3,
            4, 0, 0, 8, 0, 3, 0, 0, 1,
            7, 0, 0, 0, 2, 0, 0, 0, 6,
            0, 6, 0, 0, 0, 0, 2, 8, 0,
            0, 0, 0, 4, 1, 9, 0, 0, 5,
            0, 0, 0, 0, 8, 0, 0, 7, 9
        ],
        [
            0, 0, 0, 2, 6, 0, 7, 0, 1,
            6, 8, 0, 0, 7, 0, 0, 9, 0,
            1, 9, 0, 0, 0, 4, 5, 0, 0,
            8, 2, 0, 1, 0, 0, 0, 4, 0,
            0, 0, 4, 6, 0, 2, 9, 0, 0,
            0, 5, 0, 0, 0, 3, 0, 2, 8,
            0, 0, 9, 3, 0, 0, 0, 7, 4,
            0, 4, 0, 0, 5, 0, 0, 3, 6,
            7, 0, 3, 0, 1, 8, 0, 0, 0
        ],
        [
            0, 0, 0, 6, 0, 0, 4, 0, 0,
            7, 0, 0, 0, 0, 3, 6, 0, 0,
            0, 0, 0, 0, 9, 1, 0, 8, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 5, 0, 1, 8, 0, 0, 0, 3,
            0, 0, 0, 3, 0, 6, 0, 4, 5,
            0, 4, 0, 2, 0, 0, 0, 6, 0,
            9, 0, 3, 0, 0, 0, 0, 0, 0,
            0, 2, 0, 0, 0, 0, 1, 0, 0
        ]
    ];

    const solutions = [
        [
            5, 3, 4, 6, 7, 8, 9, 1, 2,
            6, 7, 2, 1, 9, 5, 3, 4, 8,
            1, 9, 8, 3, 4, 2, 5, 6, 7,
            8, 5, 9, 7, 6, 1, 4, 2, 3,
            4, 2, 6, 8, 5, 3, 7, 9, 1,
            7, 1, 3, 9, 2, 4, 8, 5, 6,
            9, 6, 1, 5, 3, 7, 2, 8, 4,
            2, 8, 7, 4, 1, 9, 6, 3, 5,
            3, 4, 5, 2, 8, 6, 1, 7, 9
        ],
        [
            4, 3, 5, 2, 6, 9, 7, 8, 1,
            6, 8, 2, 5, 7, 1, 4, 9, 3,
            1, 9, 7, 8, 3, 4, 5, 6, 2,
            8, 2, 6, 1, 9, 5, 3, 4, 7,
            3, 7, 4, 6, 8, 2, 9, 1, 5,
            9, 5, 1, 7, 4, 3, 6, 2, 8,
            5, 1, 9, 3, 2, 6, 8, 7, 4,
            2, 4, 8, 9, 5, 7, 1, 3, 6,
            7, 6, 3, 4, 1, 8, 2, 5, 9
        ],
        [
            5, 8, 1, 6, 7, 2, 4, 3, 9,
            7, 9, 2, 8, 4, 3, 6, 5, 1,
            3, 6, 4, 5, 9, 1, 7, 8, 2,
            4, 3, 8, 9, 5, 7, 2, 1, 6,
            2, 5, 6, 1, 8, 4, 9, 7, 3,
            1, 7, 9, 3, 2, 6, 8, 4, 5,
            8, 4, 5, 2, 1, 9, 3, 6, 7,
            9, 1, 3, 7, 6, 8, 5, 2, 4,
            6, 2, 7, 4, 3, 5, 1, 9, 8
        ]
    ];

    const newGame = () => {
        const randomIndex = Math.floor(Math.random() * predefinedSudokus.length);
        setCells([...predefinedSudokus[randomIndex]]);
        setCurrentSudokuIndex(randomIndex);
        setCurrentNumber(1);
        setStatus('New game created. Insert all "1"s.');
    };

    const reset = () => {
        if (currentSudokuIndex !== null) {
            setCells([...predefinedSudokus[currentSudokuIndex]]);
            setCurrentNumber(1);
            setStatus('Game reset. Insert all "1"s.');
        } else {
            setStatus('No game to reset.');
        }
    };

    const clean = () => {
        setCells(Array(81).fill(''));
        setCurrentNumber(1);
        setStatus('All cells cleaned. Insert all "1"s.');
    };

    const solve = () => {
        if (currentSudokuIndex !== null) {
            setCells([...solutions[currentSudokuIndex]]);
            setStatus('Sudoku solved.');
        } else {
            setStatus('No game to solve.');
        }
    };

    const checkRow = (index, value) => {
        const row = Math.floor(index / 9);
        for (let i = row * 9; i < row * 9 + 9; i++) {
            if (i !== index && cells[i] === value) {
                return true;
            }
        }
        return false;
    };

    const checkColumn = (index, value) => {
        const column = index % 9;
        for (let i = column; i < 81; i += 9) {
            if (i !== index && cells[i] === value) {
                return true;
            }
        }
        return false;
    };

    const checkQuadrant = (index, value) => {
        const startRow = Math.floor(Math.floor(index / 9) / 3) * 3;
        const startColumn = Math.floor((index % 9) / 3) * 3;
        for (let i = startRow; i < startRow + 3; i++) {
            for (let j = startColumn; j < startColumn + 3; j++) {
                const currentIndex = i * 9 + j;
                if (currentIndex !== index && cells[currentIndex] === value) {
                    return true;
                }
            }
        }
        return false;
    };

    const handleChange = (index, value) => {
        if (!isNaN(value) && value >= 1 && value <= 9) {
            if (parseInt(value) === currentNumber) {
                const newCells = [...cells];
                newCells[index] = parseInt(value);
                if (!checkRow(index, value) && !checkColumn(index, value) && !checkQuadrant(index, value)) {
                    setCells(newCells);
                    setErrorMessage('');
                    const allCurrentNumberFilled = newCells.filter(cell => cell === currentNumber).length === 9;
                    if (allCurrentNumberFilled) {
                        if (currentNumber < 9) {
                            setCurrentNumber(currentNumber + 1);
                            setStatus(`All "${currentNumber}"s inserted. Now insert all "${currentNumber + 1}"s.`);
                        } else {
                            setStatus('All numbers inserted. Sudoku complete!');
                        }
                    }
                } else {
                    setErrorMessage('Invalid move.');
                }
            } else {
                setErrorMessage(`You must insert the number "${currentNumber}".`);
            }
        } else if (value === '' || value === '0') {
            const newCells = [...cells];
            newCells[index] = '';
            setCells(newCells);
            setErrorMessage('');
        }
    };

    const validateSudoku = () => {
        for (let i = 0; i < 81; i++) {
            const value = cells[i];
            if (value && (checkRow(i, value) || checkColumn(i, value) || checkQuadrant(i, value))) {
                setStatus('Sudoku is invalid.');
                return;
            }
        }
        setStatus('Sudoku is valid.');
    };

    return (
        <div id="container">
            <div id="cell-holder">
                <div className="button" onClick={newGame}>Create Game</div>
                <br />
                {cells.map((cell, index) => (
                    <React.Fragment key={index}>
                        <input
                            id={`cell-${index}`}
                            className={`cell ${cell === 'cell-wrong-border' ? 'cell-wrong-border' : ''}`}
                            type="text"
                            maxLength="1"
                            value={cell === 0 ? '' : cell}
                            onChange={(e) => handleChange(index, e.target.value)}
                        />
                        {index % 9 === 8 && <br />}
                    </React.Fragment>
                ))}
                <div className="button" onClick={solve}>Solve</div>
                <div className="button" onClick={reset}>Reset</div>
                <div className="button" onClick={clean}>Clean</div>
                <div className="button" onClick={validateSudoku}>Validate</div>
                <div><button id='exit' onClick={exit}>Exit</button></div>
                <p id="status">{status}</p>
                {errorMessage && <p>{errorMessage}</p>}
                <p>Current number to insert: {currentNumber}</p>
            </div>
        </div>
    );
};

export default Sudoku;