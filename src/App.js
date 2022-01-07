import { useState } from "react";
import {nanoid} from "nanoid";
import Confetti from "react-confetti";

import Dice from "./Dice/Dice";
import "./Dice/Dice.css";

function App() {
    const allNewDice = () => {
        const diceArray = [];
        for (let i = 0; i < 10; i++)
            diceArray.push({
                value: Math.ceil(Math.random() * 6),
                isHeld: false,
                id: nanoid(),
            });
        return diceArray;
    };

    const [diceNums, setDiceNums] = useState(allNewDice);

    const diceElements = diceNums.map((diceNum) => (
        <Dice value={diceNum.value} key={diceNum.id} isHeld={diceNum.isHeld} />
    ));

    const rollDice = () => {
        setDiceNums(allNewDice());
    };

    return (
        <main>
            <div className="dice-container">{diceElements}</div>
            <button className="roll-dice" onClick={rollDice}>
                Roll
            </button>
        </main>
    );
}

export default App;
