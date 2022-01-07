import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

import Dice from "./Dice/Dice";
import "./Dice/Dice.css";

function App() {
    const generateNewDice = () => {
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid(),
        };
    };

    const allNewDice = () => {
        const diceArray = [];
        for (let i = 0; i < 10; i++) diceArray.push(generateNewDice());
        return diceArray;
    };

    const [diceNums, setDiceNums] = useState(allNewDice());

    const [tenzies, setTenzies] = useState(false);

    useEffect(() => {
        const allHeld = diceNums.every((diceNum) => diceNum.isHeld);
        const firstValue = diceNums[0].value;
        const allSameValue = diceNums.every(
            (diceNum) => diceNum.value === firstValue
        );
        if (allHeld && allSameValue) {
            setTenzies(true);
        }
    }, [diceNums]);

    const rollDice = () => {
        setDiceNums((oldDice) =>
            oldDice.map((diceNum) => {
                return diceNum.isHeld ? diceNum : generateNewDice();
            })
        );
    };

    const diceElements = diceNums.map((diceNum) => (
        <Dice
            value={diceNum.value}
            key={diceNum.id}
            isHeld={diceNum.isHeld}
            holdDice={() => holdDice(diceNum.id)}
        />
    ));

    const holdDice = (id) => {
        setDiceNums((oldDice) =>
            oldDice.map((diceNum) => {
                return diceNum.id === id
                    ? { ...diceNum, isHeld: !diceNum.isHeld }
                    : diceNum;
            })
        );
    };

    return (
        <main>
            {tenzies && <Confetti />}
            <h1 className="title">Tenzies</h1>
            <p className="instructions">
                Roll until all dice are the same. Click each die to freeze it at
                its current value between rolls.
            </p>
            <div className="dice-container">{diceElements}</div>
            <button className="roll-dice" onClick={rollDice}>
                {tenzies ? "New Game" : "Roll"}
            </button>
        </main>
    );
}

export default App;
