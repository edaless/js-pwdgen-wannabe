
// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21

// let miaStringa;
// let miaStringa1;
// let miaStringa2;
// let miaStringa3;

// // alert(miaStringa);


// miaStringa = 'Arrivederci';
// console.log(miaStringa);


// miaStringa = 5;
// console.log(miaStringa);


// miaStringa = "5" + " " + "sei";
// console.log(miaStringa);


// miaStringa1 = "mia1";
// miaStringa = "5" + " " + "sei" + " " + miaStringa1;
// console.log(miaStringa);


// miaStringa1 = "mia1";


// miaStringa3 = 
// `fh3r9uhec cuhwc9uhre9c+diehbcc
// ${miaStringa}
// eicuberciuh rceruh jjnrfij
// `;
// // `
// // `
// console.log(miaStringa3);

// const nome = prompt("inserisci il tuo nome");
// console.log(nome);
// text = parseInt(prompt("inserisci il tuo numero"));
// console.log(text);


// document.getElementById("titolo").innerHTML = "ciao " + nome;


const numero = 21;

let nome = prompt("inserisci il tuo nome");
console.log(nome);


let cognome = prompt("inserisci il tuo cognome");
console.log(cognome);


let colPref = prompt("inserisci il tuo colore preferito");
console.log(colPref);

let password = nome + cognome + colPref + numero;





document.getElementById("password").innerHTML = 
`La tua password è:  ${password}
`
;

