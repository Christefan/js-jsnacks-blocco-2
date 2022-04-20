const username = ['Marco','Michelle','Mario','Paolo','Pietro'];
const prename = ['Esposito','Rossi','Capolongo','Napolitano','Natale'];
let cont1;
let cont2;
for(let i = 0;i < 3; i++){
    cont1 = Math.floor(Math.random() * username.length);
    cont2 = Math.floor(Math.random() * prename.length);
    console.log(username[cont1],prename[cont2]);

}