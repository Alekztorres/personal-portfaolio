let factura = {
    nombreEmisor:'Juan',
    rfcEmisor:'SDJKSAFSJASAS',
    nombreReceptor:'Pedro',
    rfcReceptor:'SSDGDSGSD436',
    concepto:[
        {nombre:'pala', cantidad:'3', costoUnitario:79, sku:'8978SD'},
        {nombre:'Metro', cantidad:'2', costoUnitario:90, sku:'sdhjfsahjf'},
        {nombre:'Pico', cantidad:'1', costoUnitario:200, sku:'HJKASDUWEQIFWSA'},
        {nombre:'Desarmador', cantidad:'1', costoUnitario:40, sku:'8HJASW978SD'}
    ],
    iva:16
};
//console.log(factura.nombreEmisor);

//factura.concepto.forEach(element => {
//    console.log(element.nombre);
//    console.log(element.cantidad+costoUnitario);  
//});

console.log(factura.nombreEmisor);
let subtotal=0;
let total=0;

factura.concepto.forEach(element => {
    subtotal+=(element.cantidad*element.costoUnitario)
    
});

totaliva=(subtotal*(factura.iva/100)+subtotal);
console.log('subtotal:', subtotal)
console.log('total:', total)


//let numeros= [7, 8, 9, 3, 10, 2, 1, 0];
//console.log(numeros);
//numeros[0] = 8;
//console.log(numeros);

//let numeroUno = numeros[0]; // 7
//let numeroDos = numeros[1]; // 8

//if(numeroUno > numeroDos){
//    console.log('es mayor numeri uno');
//} else{
//    console.log('es mayor numero dos');
//    numeros.sort(); 
//}
//numeros.sort(); 

//if(numero)


//// DUPLICADO
let numeros= [7, 8, 9, 3, 10, 2, 1, 0];
console.log(numeros);
numeros[0] = 8;
console.log(numeros);

let numeroUno = numeros[0]; // 7
let numeroDos = numeros[1]; // 8


let aux;

for(let i = 0 ; i < numeros.length -1; i++){
    for(let j = 0; j < numeros.length; j++){
        if(numeros[j]< numeros[j+1]){

            console.log(numeros[j]+ 'es mayor que:'+ numeros[j+1])
            aux= numeros[j]; //9
            numeros[j] = numeros[j+1];
            numeros[j+1]= aux;
        }
    }
}



//let numeros = [1, 10, 2, 21]; 
//numeros.sort(); // [1, 10, 2, 21]
// Tenga en cuenta que 10 viene antes que 2
// porque '10' viene antes que '2' según la posición del valor Unicode.