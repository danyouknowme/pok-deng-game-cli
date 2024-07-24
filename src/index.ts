import readline from "readline";
import { Deck } from "./lib/deck";

function playRound(rl: readline.Interface, balance: number, callback: (balance: number) => void) {
	console.log("Please put your bet");

	rl.question("", (answer: string) => {
		const bet = parseInt(answer, 10);

		if (isNaN(bet) || bet <= 0) {
			console.log("Invalid bet. Please enter a positive number.");
			return playRound(rl, balance, callback);
		}

		const deck = new Deck();
		deck.shuffle();
		const playerCards = deck.getPlayerCards();
		const dealerCards = deck.getDealerCards();

		console.log("You got ", playerCards.map((card) => card.label).join(", "));
		console.log("The dealer got ", dealerCards.map((card) => card.label).join(", "));

		const calculatedScore = deck.calculateScore(playerCards, dealerCards);
		if (calculatedScore > 0) {
			console.log(`You won!!!, received ${bet} chips`);
			balance += bet;
			console.log("You win!");
		} else if (calculatedScore === 0) {
			console.log("It's a draw!");
		} else {
			console.log(`You lose!!!, lost ${bet} chips`);
			balance -= bet;
		}

		callback(balance);
	});
}

function main() {
	const rl = readline.createInterface({
		input: process.stdin,
		output: process.stdout,
	});

	let balance = 0;

	function startGame() {
		playRound(rl, balance, (newBalance) => {
			balance = newBalance;

			console.log("Wanna play more (Yes/No)?");
			rl.question("", (answer) => {
				if (answer.toLowerCase() === "yes") {
					startGame();
				} else {
					if (balance < 0) {
						console.log(`You lost ${Math.abs(balance)} chips`);
					} else {
						console.log(`Your got total ${balance} chips`);
					}
					rl.close();
					process.exit(0);
				}
			});
		});
	}

	startGame();
}

main();
