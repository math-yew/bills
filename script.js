let adjust = "T00:00:00";
let months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
let timePeriod = [];
let start = null;
let end = null;

function getTimePeriod(){
  let startDate = "2022-04-27";
  let endDate = "2022-05-28";
  start = Date.parse(startDate + adjust);
  end = Date.parse(endDate + adjust);
  console.log("start: " + start);
  console.log("end: " + end);
  for(let bill of budget.bills){
    addBill(bill);
  }
}
getTimePeriod();


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
  let billDate = Date.parse(bill.date + adjust).toString()*1;
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
  let billDate = Date.parse(bill.date + adjust).toString()*1;
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
  let billDate = Date.parse(bill.date + adjust).toString()*1;
    if(billDate <= end*1 && billDate >= start*1){
      addToPeriod(bill, billDate);
    }
}

function addDaySpacedBill(bill){
  let billDate = Date.parse(bill.date + adjust).toString()*1;
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

function showOutput(){
  let sortedTimePeriod = timePeriod.sort((a,b)=>a.date*1-b.date*1);
  let output = "";
  let total = 0;
  for(let item of sortedTimePeriod){
    if(item.income){
      total += item.amount*1;
    }else{
      total -= item.amount*1;
    }
    let itemDate = new Date(item.date);
    output += item.name + " " + months[itemDate.getMonth()] + " " + itemDate.getDate() + " $" + item.amount + " $" + total.toFixed(2);
    output += "<br><br>"
  }
  document.getElementById('output').innerHTML = output;
}
showOutput();

function seeDate(){
  let chosenDate = document.getElementById("chosenDate").value;
  console.log("chosenDate: " + chosenDate);
}
