import { Deck } from "./deck";

describe("Deck", () => {
	it("should create an instance", () => {
		expect(new Deck()).toBeDefined();
	});

	it("should get player cards", () => {
		const deck = new Deck();
		const playerCards = deck.getPlayerCards();
		expect(playerCards.length).toBe(2);
	});

	it("should get dealer cards", () => {
		const deck = new Deck();
		const dealerCards = deck.getDealerCards();
		expect(dealerCards.length).toBe(2);
	});

	it("should shuffle the deck", () => {
		const deck = new Deck();
		const originalDeck = deck.cards.slice();
		deck.shuffle();
		expect(deck.cards).not.toEqual(originalDeck);
	});

	it("should calculate the score", () => {
		const deck = new Deck();
		const playerCards = deck.getPlayerCards();
		const dealerCards = deck.getDealerCards();
		const score = deck.calculateScore(playerCards, dealerCards);
		expect(score).toBe(playerCards[0].value + playerCards[1].value - dealerCards[0].value - dealerCards[1].value);
	});

	it("should throw an error when the number of cards is invalid", () => {
		const deck = new Deck();
		const playerCards = deck.getPlayerCards();
		const dealerCards = deck.getDealerCards();
		playerCards.pop();
		expect(() => deck.calculateScore(playerCards, dealerCards)).toThrow("Invalid number of cards");
	});
});
