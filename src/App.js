import {useState} from "react";
import Confetti from "react-confetti";

import Dice from "./Dice/Dice";
import "./Dice/Dice.css";

function App() {
        const allNewDice = () => {
        const diceArray = [];
        for (let i = 0; i < 10; i++)
            diceArray.push(Math.ceil(Math.random() * 6));
        return diceArray;
    };

    const [diceNumbers, setDiceNumbers] = useState(allNewDice());

    const diceElements = diceNumbers.map((diceNum, i) => {
        return (<Dice value={diceNum} key={i}/>);
    });

    return (
        <main>
            <div className="dice-container">
                {diceElements}
            </div>
        </main>
    );
}

export default App;
