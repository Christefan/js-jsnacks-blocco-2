const valoreInserito = parseInt(prompt(`Inserisci un numero`));
console.log(valoreInserito);

for (let i = 1; i <= valoreInserito; i++){
    const risultato = (Math.pow(i, 3)) ;
    console.log(risultato);
}