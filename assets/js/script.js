/* 
Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
 */

const lista = ['limoni', 'timo', 'pomodori', 'salvia'];
const spesaElement = document.querySelector('.listaspesa');
//spesaElement.innerHTML = lista;
for (let index = 0; index < lista.length; index++) {
    const oneElementList = document.createElement('div');
    //console.log(oneElementList);
    spesaElement.append(oneElementList);
    oneElementList.append(lista[index]);
}
/* console.log(lista[2]);
lista.push('mele');
console.log(lista); */



let index = 0;
while (index < lista.length) {
    const oneElementList = document.createElement('div');
    //console.log(oneElementList);
    spesaElement.append(oneElementList);
    oneElementList.append(lista[index]);
    index++;
}




/* const pari = 6;
const black = 5;
const pippo = 9;
const lista = ['mela', 'banana', 'susina', 'melone'];
const doc = document.querySelector('.listener');
console.log(lista[0]);
doc.innerHTML = lista[0];



function moltiplicatore(numbPari, numbdispari, disney) {
    const numbMoltiplicato = numbPari * numbdispari + disney;
    return numbMoltiplicato;
}
doc.innerHTML += ' ' + moltiplicatore(pari, black, pippo)
console.log(moltiplicatore(pari, black, pippo)); */  
