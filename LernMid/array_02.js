const marvel_heros = ["Iron Man", "Captain America", "Thor", "Spider-Man", "Black Widow", "Black Panther", "Hulk"]
const dc_heros = ["Superman", "Batman", "Wonder Woman", "Green Lantern", "Nightwing", "The Flash", "Catwoman"]

/*marvel_heros.push(dc_heros)//array inside array not good merge idea
console.log(marvel_heros);
/*[
    'Iron Man',
    'Captain America',
    'Thor',
    'Spider-Man',
    'Black Widow',
    'Black Panther',
    'Hulk',
    [
      'Superman',
      'Batman',
      'Wonder Woman',
      'Green Lantern',
      'Nightwing',
      'The Flash',
      'Catwoman'
    ]
  ]*/
// marvel_heros.concat(dc_heros)//same as push logic
// console.log(marvel_heros);

const all_heros = marvel_heros.concat(dc_heros)
console.log(all_heros);

const all_new_heros = [...marvel_heros, ...dc_heros]//continute with third array
console.log(all_new_heros);


console.log(Array.isArray("Abhishek"));//false
console.log(Array.from("Abhishek"));//['A', 'b', 'h', 'i', 's', 'h', 'e', 'k' ]
