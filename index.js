//Evaluación N° 1,  María José Gómez
// Realice un programa en JavaScript que pida cuantos volantines logra hacer cada día durante 7 días,
//al final de estos días realice un informe:
// • Calcular el promedio de volantines por día
// • Cuantos volantines alcanzó a fabricar.
// • Cual fue el día que fabrico menos

const prompt = require('prompt-sync')();
volantin = [];
cont = 0; suma = 0; menor = 999;
console.log('Bienvenido al registro de volantines')
for (let i = 0; i < 7; i++) {
    volantin.push(parseInt(prompt(`Ingrese la cantidad de volantines fabricados el día ${i+1}:  `)));
    cont = cont + 1;
    suma = suma + volantin[i];
    if (volantin[i]< menor){
        menor = volantin[i];
        indice = i + 1;
    }

}
console.log(`El promedio de volantines fabricados por día fue de ${suma/cont}`);
console.log(`Alcanzó a fabricar ${suma} volantines en 7 días`);
console.log(`El día ${indice} fue el día que fabrico menos volantines`);

