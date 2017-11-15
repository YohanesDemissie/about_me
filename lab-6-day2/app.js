// Object literal
var emptyObj = {}; // empty obj

var bill = {
  name: 'bill',
};
var stella = {
  name: 'stella',
};
var laura = {
  name: 'laura',
};

var person = {
  age: 34,
  name: 'scott',
  children: [bill, stella, laura],
};

// Objects will not maintain order of property names
// var person = {
//   age: 34,
//   children: (3)[{ … }, { … }, { … }],
//   name: "scott",
// }

// Object methods
var turtle = {
  name: 'Leo',
  details: {
    speed: 3, // 0-9
    breed: 'snapping',
    color: 'blue',
    size: 32,
    doesSwim: true,
  },
  weapon: 'katana',
  ninja: true,
  sayHello: function() {
    console.log('Hello, my name is ' + this.name + ', and I am a ' + this.details.breed + ' turtle');
  },
};

function sayHello() {
  console.log('Hello my name is ', turtle.name);
}

// 'use strict';
//
// var tablElement = document.getElementById('main-table');
// var tbodyElement = document.createElement('tbody');
// tbodyElement.className = 'table-class';
// tbodyElement.id = 's-table-body';
// tablElement.appendChild(tbodyElement);
//
// // Create a Row
// var trElement = document.createElement('tr');
//
// // Create a series of TDs, and provide each with content
// // append each TD to the TR
// for(var i = 0; i < 4; i++) {
//   var tdEl = document.createElement('td');
//   tdEl.textContent = i;
//   trElement.appendChild(tdElement);
// }
// console.log('table element', tablElement);
//
// // Append the TR to the TBody
// tbodyElement.appendChild(trElement);
//
// //implimenting monday lab into tuesday lab
// var firstAndPike = {
//   name: '1st And Pike',
//   minCustomers: 23,
//   maxCustomers: 65,
//   averageCookieSale: 6.3,
//   dayZero: 0,//where the addition begins with adding total
//   custPerHr: function () {
//     return Math.random () * (this.maxCustomers - this.minCustomers) + this.minCustomers;
//   },
//   storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
//   averageCookiePerHour: function () {
//     //     // var empty = [];
//     for (var i = 0; i < this.storeHours.length; i++) {
//       //       // jesus jelp with total function
//       //rendor: function () //rendor allows you to display javascript data in html
//       if (i <15) {
//         //       //end help
//         var cookieSoldPerHr =(Math.round(this.averageCookieSale * this.custPerHr()));
//         this.dayZero += cookieSoldPerHr;
//         console.log ('cookies sold per hour', this.dayZero);
//         var table = document.getElementsByTagName('table')[0];
//         var newItemLast = document.createElement('tr');
//         var newTextLast = //the next code below is to display table
//         document.createTextNode(this.storeHours[i] + ': ' + cookieSoldPerHr);
//         newItemLast.appendChild(newTextLast);
//         table.appendChild(newItemLast);
//       } else { //more of jesus + kowsers help
//         var newTable = document.createElement('tr');
//         var newContent = document.createTextNode('Total: ' + this.dayZero );
//         newItemLast = document.createElement('td');
//         newTextLast = document.createTextNode() //this pulls from 'i' in node
//         //       //
//       }
//
//
// };
// // //return empty;
// firstAndPike.averageCookiePerHour();
// console.log(firstAndPike);
//
// // //lecture notes
// // var stores = [];
// // var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
// //
// // function store(name, maxCustomers, minCustomers, averageCookieSale)
// //
// //
// //
// // function createTable () {
// //   var tableEl = document.getElementById('main-tbl');
// //   var header = createTableHead ();
// //   var body
// //   tableEl.appendChild(header)
// //   //var headRer = document.getElementById('thead') dony use this line
// //
// // }
// //
// //
// // //Scots work he guided us through. compare to previous work and understand differences
// // function creatTableHead () {
// //   var theadEl = document.createElement('thead');
// //   var headRow = CreateTableRow('', hours, 'Totals');
// //   return theadEl;
// // }
// //
// // function createTableBody () {
// //   var tbodyEl = docuemtn.createElement('tbody');
// // //  var bodyRow = docuemtn.createElement() scott didnt do this step...
// //   for (var k = 0; k < hours.length, k++) {
// //     var bodyRow = creatTableRow (stores[k].name, stores[k].hourlyCookies, store[k].dailyTotal);
// //     tbodyEl.appendChild(bodyRow);
// //   }
// // }
// //
// // function cereateTableRow(vertical header, dataPoints, verticalFooter) {
// //
// //   var trEl = document.createElement ('tr');
// //   var tdElOne = doument.createElement ('td';
// //   tdElOne.textContent = verticalHeader;
// //   trEl.appendChild(tdElOne);
// //
// //   for (let j = 0; j < dataPoints.length; j++) { //data array
// //     var tdEltwo = document.createElement('td');
// //     tdElTwo,textContent = dataPoints [j];
// //     trEl.appendChild(tdElTwo) ;
// //   }
// //   var tdEl3 = document.createElement ('td');
// //   tdElThree.textContent = verticalFooter;
// //   trEl,appendChild(tdElThree);
// //   return trEl;
// // }//
