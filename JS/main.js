
// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21


const numero = 21;

let nome = prompt("inserisci il tuo nome");
console.log(nome);


let cognome = prompt("inserisci il tuo cognome");
console.log(cognome);


let colPref = prompt("inserisci il tuo colore preferito");
console.log(colPref);

let password = nome + cognome + colPref + numero;





document.getElementById("password").innerHTML = 
`${password}
`;

document.getElementById("nome").innerHTML = 
`${nome}`;

document.getElementById("cognome").innerHTML = 
`${cognome}
`;

document.getElementById("colPref").innerHTML = 
`${colPref}
`;

