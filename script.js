let adjust = "T00:00:00";

let test = new Date(2022,0+1,14);
console.log(test);

// let one = new Date("2021-12-31"+adjust);
// let two = new Date(2021,11,31);
// let three = new Date("2021","11","31");
// let four = Date.parse("2021-12-31"+adjust);
// let five = Date.parse(2021,11,31);
// let six = new Date("2021-12-31");
// console.log(one);
// console.log(two);
// console.log(three);
// console.log("one: " + one.getTime());
// console.log("four: " + four);
// console.log("five: " + five);
// console.log("six: " + six.getTime());
// console.log(Date.parse(one));
// console.log(Date.parse(two));
// console.log(Date.parse(three));
// console.log(Date.parse(2021,11,31));
// console.log(Date.parse("2021","11","31"));
// let nextM = new Date(one.getFullYear(),one.getMonth()+1,one.getDate())
// console.log(one);
// console.log(nextM);
// console.log("------------------------");



// addDays(startDate);
const budget = {
  mileStoneDate: "2022-02-25",
  mileStoneAmount: 1000.25,
  bills:[
    { name: "Key Bank CC",
      date: "2022-01-15",
      freq: "m",
      amount: 15.25
    },
    { name: "Phone",
      date: "2022-01-10",
      freq: "30",
      amount: 5.75
    },
    { name: "Car registration",
      date: "2022-05-01",
      freq: "y",
      amount: 10.50
    },
    { name: "Library Fee",
      date: "2022-05-05",
      freq: "s",
      amount: 31
    }
  ]
}

let startDate = "2022-4-28";
let start = Date.parse(startDate);
console.log("start: " + start);
let endDate = "2022-5-28";
let end = Date.parse(endDate);
console.log("end: " + end);
let timePeriod = [];



for(let bill of budget.bills){
  console.log(bill.name);
  addBill(bill);
}

function addBill(bill){
  switch (bill.freq){
    case "m":
      addMonthlyBill(bill);
      break;
    case "y":
      addYearlyBill(bill)
      break;
    case "s":
      addSingleBill(bill);
      break;
    default:
      if(bill.freq > -1){
        addDaySpacedBill(bill);
      }
  }
}

function addMonthlyBill(bill){
  let billDate = Date.parse(bill.date).toString()*1;
  while(billDate <= end*1){
    if(billDate >= start*1){
      addToPeriod(bill, billDate);
    }
    let converted = new Date(billDate);
    let nextMonth = new Date(converted.getFullYear(),converted.getMonth()+1,converted.getDate())
    billDate = nextMonth.getTime().toString()*1;
  }
}

function addYearlyBill(bill){
  let billDate = Date.parse(bill.date).toString()*1;
  while(billDate <= end*1){
    if(billDate >= start*1){
      addToPeriod(bill, billDate);
    }
    let converted = new Date(billDate);
    let nextYear = new Date(converted.getFullYear() + 1,converted.getMonth(),converted.getDate())
    billDate = nextYear.getTime().toString()*1;
  }
}

function addSingleBill(bill){
  let billDate = Date.parse(bill.date).toString()*1;
    if(billDate <= end*1 && billDate >= start*1){
      addToPeriod(bill, billDate);
    }
}

function addDaySpacedBill(bill){
  let billDate = Date.parse(bill.date).toString()*1;
  while(billDate <= end*1){
    if(billDate >= start*1){
      addToPeriod(bill, billDate);
    }
    billDate += bill.freq*24*3600*1000;
  }
}

function addToPeriod(bill, billDate){
  let obj = {...bill};
  delete obj.freq;
  obj.date = billDate;
  timePeriod.push(obj)
}

console.log("timePeriod: " + JSON.stringify(timePeriod));

let sortedTimePeriod = ""

let output = "";
for(let item of timePeriod){
  let itemDate = new Date(item.date);
  output += item.name + " " + itemDate + " $" + item.amount;
  output += "<br><br>"
}
  document.getElementById('output').innerHTML = output;

// function addDays(){
//   let startDateStr = document.getElementById('startDate').value;
//   let date = new Date(startDateStr);
//   let days = document.getElementById('days').value*1;
//   console.log("days: " + days);
//   console.log("date.getDate(): " + date.getDate());
//   let output = "Start Date: " + date.toString();
//   // output += "<br> Next line:" + Date.parse(date);
//   date.setDate(date.getDate() + days);
//   output += "<br> Next line:" + date.toString();
//   // output += "<br> Next line:" + Date.parse(date);
//   document.getElementById('output').innerHTML = output;
// }
