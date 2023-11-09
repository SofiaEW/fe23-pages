console.log("hello world");
//kommentar

//Skapar ett p element
let pEl = document.createElement("p");

//Lägger till p-elementet till bodyn
document.body.appendChild(pEl);

//Ger p-elementet textinnehåll
pEl.innerText = "This is a new paragraph";

let h3 = document.createElement("h3");
document.body.appendChild(h3);
h3.innerText = "hejdå";

for (let i = 0; i < 10; i = i + 1) {
	console.log(i);
}

for (let i = 10; i > 0; i--) {
	console.log(i);
}

for (let i = 15; i < 33; i++) {
	console.log(i);
}

//skapa en lista med 10 punkter

const olE1 = document.createElement("ol");
document.body.appendChild(olE1);

for (let i = 0; i < 10; i++) {
	const liE1 = document.createElement("li");
	olE1.appendChild(liE1);
	liE1.innerText = "test";
}

const allLi = document.querySelectorAll("li");
console.log(allLi);

for (let i = 0; i < 10; i++) {
	allLi[i].style.backgroundColor = "skyblue";
}

//Två variabler med olika datatyper
let age = 52;
const fullName = "Bob Ross";

//Så här har vi satt ihop meningar tidigare
const sentence1 = fullName + " was " + age + " years old when he passed away.";

//Så här sätter man ihop en mening med template literals
const sentence2 = `${fullName} was ${age} years old when he passed away.`;

//Resultatet av de två olika sätten blir exakt samma
console.log(sentence1);
console.log(sentence2);

for (let i = 0; i < 10; i++) {
	const h1 = document.createElement("h1");
	document.body.appendChild(h1);

	const hue = 230 + i * 30;
	// h1.style.backgroundColor = hsl(0, 100%, 50%);
	h1.style.backgroundColor = `hsl(${hue}, 50%, 80%)`;

	let kap = i + 1;
	h1.innerText = "Kapitel " + kap + ", hue är " + hue;
}

const h2 = document.createElement(`h2`);
document.body.appendChild(h2);

let color1 = "green";
let text1 = "hej på dig";

h2.style.color = color1;
h2.innerText = text1;

let myBorder = "lightblue 2px solid";

h2.style.border = myBorder;

let p = document.createElement("p");
document.body.appendChild(p);

p.innerText = "en apelsin eller två";

for (let i = 0; i < 5; i++) {
	const ol = document.createElement("ol");
	document.body.appendChild(ol);

	for (let j = 0; j < 3; j++) {
		const li = document.createElement("li");
		ol.appendChild(li);
		console.log(i, j);
	}
}

for (let i = 0; i < 20; i++) {
	const h3 = document.createElement("h3");
	document.body.appendChild(h3);
	h3.innerText = i + 1;

	const lightness = 100 - i * (100 / 19);
	console.log(lightness);
	h3.style.backgroundColor = `hsl(0,0%, ${lightness}%)`;
}

//boolean, sant eller falskt
let x = 5;
let y = 10;

console.log(x == y);
console.log(x > y);
console.log(x < y);

x = "10";
console.log(x == y);
console.log(x === y);

console.log(x === 10 && y == 10); //false
console.log(x === 10 || y == 10); //true
console.log(!(x < 5)); //true

const z = 10;

//Endast ett av de tre olika alternativen kommer loggas i konsolen
if (z === 2) {
	//false
	console.log("x är lika med två!");
} else if (z > 10) {
	//false
	console.log("z är mer än tio!");
} else {
	console.log("Jag har ingen aning om vad z är");
}

for (let i = 0; i < 10; i++) {
	const h4 = document.createElement("h4");
	document.body.append(h4);
	h4.innerText = i + 1;

	if (i == 0) {
		h4.style.backgroundColor = "hotpink";
	}
	if (i == 2) {
		h4.style.backgroundColor = "hotpink";
	} else if (i == 1 || i == 5) {
		h4.style.backgroundColor = "lightblue";
	} else {
		h4.style.backgroundColor = "lightgreen";
	}

	//modulus %
	console.log(i, i % 5);
	if (i % 2 == 0) {
		h4.style.color = "green";
	}
}
//En array med fyra Strings
const bilar = ["saab", "toyota", "volvo", "audi"];
console.log(bilar);
console.log(bilar[1]);
console.log(bilar.length);

//const lenght = bilar.lenght;

// Skapa ett h2-element för varje bil i arrayen
// InnerText ska vara bilmärket
// Toyota ska ha bakgrundsfärgen champange
// audi ska ha bakgrundsfärgen militärgrön
// Var tredje bil ska ha en valfri border

for (let i = 0; i < bilar.length; i++) {
	h5E1 = document.createElement("h5");
	document.body.appendChild(h5E1);
	h5E1.innerText = bilar[i];

	if (bilar[i] == "toyota") {
		h5E1.style.backgroundColor = "hsl(68, 74%, 20%";
	} else if (bilar[i] == "audi") {
		h5E1.style.backgroundColor = "hsl(37, 72%, 89%";
	}
}

const frukt = ["apelsin", "banan", "clementin", "citron"];
console.log(frukt, frukt.length);
for (let i = 0; i < frukt.length; i++) {
	console.log(i, frukt[i]);
}

const namn = ["Jag", "Hon", "Stolen"];
const verb = ["hoppar", "springer", "dansar"];
const sätt = ["dåligt", "fint", "smått"];

console.log(namn[0], verb[0], sätt[0]);
console.log(namn[1], verb[1], sätt[1]);

p1 = document.createElement("p");
document.body.appendChild(p1);
p1.innerText = "jesus";
