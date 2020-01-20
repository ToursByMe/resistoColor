//declaration of array of strings

const colores = [
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "grey",
    "white",
];
let string = [];
string.length = 10;



const stringColores = (string)=>{
    return colores.indexOf(string);
};
stringColores();

export const COLORS = ()=>{
   return colores + ' ' + colores.indexOf(string);
  };
  COLORS();


  //
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.

//Declaration of Object map
// declaration outside so it affects them all
let myMap = new Map();

export const colorCode = () => {

    //List and set keys , values
  myMap.set(0, 'Black');
  myMap.set(1, 'Brown');
  myMap.set(2, 'Red');
  myMap.set(3, 'Orange');
  myMap.set(4, 'Yellow');
  myMap.set(5, 'Green');
  myMap.set(6, 'Blue');
  myMap.set(7, 'Violet');
  myMap.set(8, 'Grey');
  myMap.set(9, 'White');


//iterating for ...offset-1
for(let [key, value] of myMap){
  return(key + ' =' + value);
}  
};
//function
colorCode();
//export
export const COLORS = ()=>{
  for (let value of myMap.values()){
    return(value);
  }
};
COLORS();

/* Exercise following the example in documentation of Mozilla
Powerful tool though....but Do I have to wrtite every time 
all trhe key = values? */
/* Test doesn't seem to work as npm doesn't recognize jest */
