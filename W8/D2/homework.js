function titleize(names, callback) {
  let titleized = [];
  names.forEach( (name) => titleized.push(callback(name)) )
  return titleized;
}

// function help(name) {
//   return `Mx. ${name} Jingleheimer Schmidt`;
// }
// console.log(titleize(["Mary", "Brian", "Leo"], help))

function Elephant(name, height, tricks) {
  this.name = name;
  this.height = height;
  this.tricks = tricks;
}

Elephant.prototype.trumpet = function() {
  console.log(`${this.name} the elephant goes 'phrRRRRRRRRRRR!!!!!!!'`)
}

Elephant.prototype.grow = function() {
  this.height += 12;
}

Elephant.prototype.addTrick = function(trick) {
  this.tricks.push(trick);
}

Elephant.prototype.play = function() {
  console.log(this.tricks[Math.floor(Math.random() * this.tricks.length)])
}

Elephant.prototype.paradeHelper = function(elephant) {
  console.log(elephant.name + " is trotting by!");
}

// let e = new Elephant("Hi", 5, [1, 5, 9, 2, 1]);
// e.trumpet();
// console.log(e.height);
// e.grow();
// console.log(e.height);
// console.log(e.tricks);
// e.addTrick("hi");
// console.log(e.tricks);
// e.play();

// let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
// let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
// let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
// let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

// let herd = [ellie, charlie, kate, micah];
// herd.forEach( ele => ele.paradeHelper(ele))

function dinerBreakfast() {
  let order = "I'd like cheesy scrambled eggs please.";
  console.log(order);

  return function (food) {
    order = `${order.slice(0, order.length - 8)} and ${food} please.`;
    console.log(order);
  };
};