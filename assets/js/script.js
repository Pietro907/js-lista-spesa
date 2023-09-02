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


