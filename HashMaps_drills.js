const { HashMap } = require('./hashmap');


//1. 1. Create a HashMap class
function main() {

  const lotr = new HashMap()
  
  HashMap.MAX_LOAD_RATIO = 0.5;
  HashMap.SIZE_RATIO = 3;

  lotr.set('Hobbit', 'Bilbo')
  lotr.set('Hobbit', 'Frodo')
  lotr.set('Wizard', 'Gandolf')
  lotr.set('Human', 'Aragorn')
  lotr.set('Elf', 'Legolas')
  lotr.set('Maiar', 'The Necromancer')
  lotr.set('Maiar', 'Sauron')
  lotr.set('RingBearer', 'Gollum')
  lotr.set('LadyOfLight', 'Galadriel')
  lotr.set('HalfElven', 'Arwen')
  lotr.set('Ent', 'Treebeard')
  console.log('Maiar key:', lotr.get('Maiar'))
  console.log('Hobbit key:', lotr.get('Hobbit'))

  console.log(lotr) //// length = 9. 2 items are missing because there are 2 items with the same key value ('Hobbit', 'Maiar')

  // Retrieve the value that is hashed in the key "Maiar" and "Hobbit"
  console.log('Maiar =', lotr.get('Maiar')) // Sauron
  console.log('Hobbit =', lotr.get('Hobbit')) // Frodo}}

  // What are the values of Maiar and Hobbit that I have?
  // I am getting Sauron and Frodo because we have 2 keys storing 2 different values and its only showing the latter value due to not having anything to resolve collision

  // TODO: What is the capacity of the hash table after you hashed all the above items?
  console.log(lotr._capacity); // returns 24
  // capacity is 24. We went over our capacity load ratio (50%) of 8 and we have to multiply that by our size_ratio value of 3 so thats how we got 24. 
  // initial capacity = 8. MAX_LOAD_RATIO = 0.5. SIZE_RATIO = 3.
  // Once the load capacity reached 4 items, the initial capacity was multipled by the SIZE_RATIO of 3.
}

main()

// 2. WhatDoesThisDo?
// What is the output of the following code? explain your answer.
const WhatDoesThisDo = function () {
  let str1 = 'Hello World.';
  let str2 = 'Hello World.';
  let map1 = new HashMap();
  map1.set(str1, 10);
  map1.set(str2, 20);
  let map2 = new HashMap();
  let str3 = str1;
  let str4 = str2;
  map2.set(str3, 20);
  map2.set(str4, 10);

  console.log('map1 =', map1.get(str1)); // returns 20
  console.log('map2 =', map2.get(str3)); // returns 10
}
WhatDoesThisDo();
// this function is creating a collision, therefore duplicate keys will overwrite previous data values

//4. Remove duplicates v1
const string = 'google all that you think can think of';
const string2 = 'google';
const duplicate = new HashMap();

for (let i = 0; i < string2.length; i++) {
  duplicate.set(string2[i], string2[i]);
}

console.log(duplicate);
let newStr = '';
duplicate._hashTable.forEach(letter => {
  newStr += letter.value;
});

console.log(newStr);

//Remove duplicates v2
function removeDuplicates(string) {
  const map = new Map();
  let newStr = '';
  string.split('').forEach(letter => {
      if (!map.has(letter)) {
          map.set(letter, '');
          newStr += letter;
      }
  });
  return newStr;
}

console.log(removeDuplicates('google')); // gole
console.log(removeDuplicates('google all that you think can think of')); // gole athyuinkcf 

