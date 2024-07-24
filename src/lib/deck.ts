import { cards } from "./card";
import type { Card } from "./card";

export class Deck {
	public _cards: Card[];

	public constructor() {
		this._cards = cards;
	}

	public getPlayerCards(): Card[] {
		// get the first pair of cards from the deck
		return this._cards.splice(0, 2);
	}

	public getDealerCards(): Card[] {
		// get the last pair of cards from the deck
		return this._cards.splice(this._cards.length - 2, 2);
	}

	public shuffle(): void {
		let i = this._cards.length;
		while (i !== 0) {
			const j = Math.floor(Math.random() * (i + 1));
			i--;

			// swap elements between i and j in the array
			[this._cards[i], this._cards[j]] = [this._cards[j], this._cards[i]];
		}
	}

	public calculateScore(playerCards: Card[], dealerCards: Card[]): number {
		if (playerCards.length !== 2 || dealerCards.length !== 2) {
			throw new Error("Invalid number of cards");
		}

		// I'm not sure how to calculate the score of pok-deng game, if score more than 10 then it will decrease by 10 maybe
		// but based on the requirement, I will assume that the score is the summation of the value of the cards.
		const playerScore = playerCards.reduce((acc, card) => acc + card.value, 0);
		const dealerScore = dealerCards.reduce((acc, card) => acc + card.value, 0);

		return playerScore - dealerScore;
	}
}
