// <1-fold --- INIZIO FATTORIZZAZIONE
// VAR ASSIGNMENT
var n;
var factor = [];

// ASK FOR A NUMBER > 1
do {
    n = parseInt(prompt("Inserisci un numero naturale maggiore di 1:"));
} while ( isNaN(n) || n <= 1 );

// stamp n
console.log("Numero scelto dall'utente: " + n);

// SELECT THE FACTOR OF N
for (var i = 2; i <= n; i++) {
    // divide n from 2 to n
    while (!(n % i)) {
        factor.push(i);
        n /= i;
    }
}
console.log(factor);
// </1-fold --- FINE FATTORIZZAZIONE
