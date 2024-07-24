const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
const values = [
	{ label: "Ace", value: 1 },
	{ label: "2", value: 2 },
	{ label: "3", value: 3 },
	{ label: "4", value: 4 },
	{ label: "5", value: 5 },
	{ label: "6", value: 6 },
	{ label: "7", value: 7 },
	{ label: "8", value: 8 },
	{ label: "9", value: 9 },
	{ label: "10", value: 0 },
	{ label: "Jack", value: 0 },
	{ label: "Queen", value: 0 },
	{ label: "King", value: 0 },
];

export type Card = {
	label: string;
	value: number;
};

export const cards: Card[] = suits.flatMap((suit) =>
	values.map((v) => ({ label: `${suit}-${v.label}`, value: v.value })),
);
