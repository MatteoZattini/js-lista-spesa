const lista = [
    'pasta',
    'pesto',
    'pomodori',
    'insalata',
    'mirtilli',
]

console.log(lista)


// for (let i = 0; i < lista.length; i++) {
    //     const element = lista[i]
    //     console.log(i, element)
    // }

const listaElelement = document.querySelector("ul")
    
let i = 0
while ( i < lista.length ) {
    i++;
    const element = lista[i]
    console.log(i, element)
// append
    const liElement = document.createElement("li")
    liElement.innerText = element;
    listaElelement.append(liElement);
// template literal
    listaElelement.innerHTML += `<li>${element}</li>`
}
