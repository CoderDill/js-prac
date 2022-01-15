function guessingGame() {
    const target = Math.floor(Math.random() * 100)
    let gameIsOver = false;
    let guesses = 0;

    return function (num) {
        if (gameIsOver) return "The game is over, you already won!";
        guesses++

        if (target === num) {
            gameIsOver = true;
            const guess = guesses === 1 ? "guess" : "guesses";
            return `You win! You found ${num} in ${guesses} ${guess}.` 
        }

        if(num < target) return `${num} is too low!`
        if(num > target) return `${num} is too high!`
    }
}

module.exports = { guessingGame };
