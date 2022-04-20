let valore;
let sum=0;
let i = 0;
do{
    valore= parseInt(prompt('Inserire valore',i+1)); 
    console.log(valore,i+1);
    
    sum=sum+valore;
    
    console.log(i+1,'somma con while',sum);
    i++;
}while(i<5)
for(i=0 ; i < 5 ; i++){ 
    valore= parseInt(prompt('Inserire valore',i+1)); 
    console.log(valore,i+1);
    
    sum=sum + valore;
    
    console.log(i+1,'somma con for',sum);
        
    
    
}