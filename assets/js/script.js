/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']
const newArray = []

for (let i = 0; i < pets.length; i++) {
  console.log(pets[i])
  newArray.push(pets[i])
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
function sortArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
    }
  }
  return array;
}
/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
function reverseArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] < array[j]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}
console.log(reverseArray(pets));
/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
function shiftArray(array) {
  array.push(array.shift());
  return array;
}
console.log(shiftArray(pets));
/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]
const newCar = {
  brand: 'Ford',
  model: 'Fiesta',
  color: 'red',
  trims: ['titanium', 'st', 'active'],
  licensePlate: 'ABC-123',
}
cars.push(newCar);
for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = 'ABC-123';
}
console.log(cars);
/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
for (let i = 0; i < cars.length; i++) {
  cars[i].trims.push('new');
}
console.log(cars);
/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for (let i = 0; i < cars.length; i++) {
  if (cars[i].color[0] === 'b') {
    console.log('Fizz');
  } else {
    console.log('Buzz');
  }
}
/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];
while (true) {
  if (numericArray[numericArray.length - 1] >= 32) {
    break;
  }
  console.log(numericArray[numericArray.length - 1]);
  numericArray.pop();
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/

const charactersArray = ['g', 'n', 'u', 'z', 'd'];
switch (charactersArray) {
  case 'a':
    console.log(1);
    break;
  case 'b':
    console.log(2);
    break;
  case 'c':
    console.log(3);
    break;
  case 'd':
    console.log(4);
    break;
  case 'e':
    console.log(5);
    break;
  case 'f':
    console.log(6);
    break;
  case 'g':
    console.log(7);
    break;
  case 'h':
    console.log(8);
    break;
  case 'i':
    console.log(9);
    break;
  case 'j':
    console.log(10);
    break;
  case 'k':
    console.log(11);
    break;
  case 'l':
    console.log(12);
    break;
  case 'm':
    console.log(13);
    break;
  case 'n':
    console.log(14);
    break;
  case 'o':
    console.log(15);
    break;
  case 'p':
    console.log(16);
    break;
  case 'q':
    console.log(17);
    break;
  case 'r':
    console.log(18);
    break;
  case 's':
    console.log(19);
    break;
  case 't':
    console.log(20);
    break;
  case 'u':
    console.log(21);
    break;
  case 'v':
    console.log(22);
    break;
  case 'w':
    console.log(23);
    break;
  case 'x':
    console.log(24);
    break;
  case 'y':
    console.log(25);
    break;
  case 'z':
    console.log(26);
    break;
}