

const Dice = ({value, isHeld, holdDice}) => {
    const styles = {
        backgroundColor: isHeld ?  "#59E391" : "white"
    }

    return (
        <div className="dice-item" style={styles} onClick={holdDice}>
            <h2 className="dice-num">{value}</h2>
        </div>
    );
}

export default Dice;