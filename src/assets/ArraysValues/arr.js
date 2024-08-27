const cardsValues = [
	{ name: '2', value: 2 },
	{ name: '3', value: 3 },
	{ name: '4', value: 4 },
	{ name: '5', value: 5 },
	{ name: '6', value: 6 },
	{ name: '7', value: 7 },
	{ name: '8', value: 8 },
	{ name: '9', value: 9 },
	{ name: '10', value: 10 },
	{ name: 'J', value: 10 },
	{ name: 'Q', value: 10 },
	{ name: 'K', value: 10 },
	{ name: 'A', value: 11 },
]

const cardImagesCDN = {
	2 : {
		"2C": "https://deckofcardsapi.com/static/img/2C.png",
		"2D": "https://deckofcardsapi.com/static/img/2D.png",
		"2H": "https://deckofcardsapi.com/static/img/2H.png",
		"2S": "https://deckofcardsapi.com/static/img/2S.png"
	},
	3 : {
		"3C": "https://deckofcardsapi.com/static/img/3C.png",
		"3D": "https://deckofcardsapi.com/static/img/3D.png",
		"3H": "https://deckofcardsapi.com/static/img/3H.png",
		"3S": "https://deckofcardsapi.com/static/img/3S.png"
	},
	4 : {
		"4C": "https://deckofcardsapi.com/static/img/4C.png",
		"4D": "https://deckofcardsapi.com/static/img/4D.png",
		"4H": "https://deckofcardsapi.com/static/img/4H.png",
		"4S": "https://deckofcardsapi.com/static/img/4S.png"
	},
	5 : {
		"5C": "https://deckofcardsapi.com/static/img/5C.png",
		"5D": "https://deckofcardsapi.com/static/img/5D.png",
		"5H": "https://deckofcardsapi.com/static/img/5H.png",
		"5S": "https://deckofcardsapi.com/static/img/5S.png"
	},
	6 : {
		"6C": "https://deckofcardsapi.com/static/img/6C.png",
		"6D": "https://deckofcardsapi.com/static/img/6D.png",
		"6H": "https://deckofcardsapi.com/static/img/6H.png",
		"6S": "https://deckofcardsapi.com/static/img/6S.png"
	},
	7 : {
		"7C": "https://deckofcardsapi.com/static/img/7C.png",
		"7D": "https://deckofcardsapi.com/static/img/7D.png",
		"7H": "https://deckofcardsapi.com/static/img/7H.png",
		"7S": "https://deckofcardsapi.com/static/img/7S.png"
	},
	8 : {
		"8C": "https://deckofcardsapi.com/static/img/8C.png",
		"8D": "https://deckofcardsapi.com/static/img/8D.png",
		"8H": "https://deckofcardsapi.com/static/img/8H.png",
		"8S": "https://deckofcardsapi.com/static/img/8S.png"
	},
	9 : {
		"9C": "https://deckofcardsapi.com/static/img/9C.png",
		"9D": "https://deckofcardsapi.com/static/img/9D.png",
		"9H": "https://deckofcardsapi.com/static/img/9H.png",
		"9S": "https://deckofcardsapi.com/static/img/9S.png"
	},
	10 : {
		"10C": "https://deckofcardsapi.com/static/img/0C.png",
		"10D": "https://deckofcardsapi.com/static/img/0D.png",
		"10H": "https://deckofcardsapi.com/static/img/0H.png",
		"10S": "https://deckofcardsapi.com/static/img/0S.png"
	},
	J : {
		"JC": "https://deckofcardsapi.com/static/img/JC.png",
		"JD": "https://deckofcardsapi.com/static/img/JD.png",
		"JH": "https://deckofcardsapi.com/static/img/JH.png",
		"JS": "https://deckofcardsapi.com/static/img/JS.png"
	},
	Q : {
		"QC": "https://deckofcardsapi.com/static/img/QC.png",
		"QD": "https://deckofcardsapi.com/static/img/QD.png",
		"QH": "https://deckofcardsapi.com/static/img/QH.png",
		"QS": "https://deckofcardsapi.com/static/img/QS.png"
	},
	K : {
		"KC": "https://deckofcardsapi.com/static/img/KC.png",
		"KD": "https://deckofcardsapi.com/static/img/KD.png",
		"KH": "https://deckofcardsapi.com/static/img/KH.png",
		"KS": "https://deckofcardsapi.com/static/img/KS.png"
	},
	A : {
		"AC": "https://deckofcardsapi.com/static/img/AC.png",
		"AD": "https://deckofcardsapi.com/static/img/AD.png",
		"AH": "https://deckofcardsapi.com/static/img/AH.png",
		"AS": "https://deckofcardsapi.com/static/img/AS.png"
	}
	
}
export default { cardsValues, cardImagesCDN }