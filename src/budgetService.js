import budget from './budget.js';

const adjust = "T00:00:00";
const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
let timePeriod = [];
let start = null;
let end = null;

const BudgetService = {
  initialDates: function (){
    let dates = {};
    let today = new Date();
    let year = today.getFullYear();
    let monthPrep = today.getMonth()*1 + 1;
    let month = monthPrep<10 ? "0" + monthPrep : monthPrep;
    let day = today.getDate();
    let nextMonthDate = new Date(year,monthPrep,day);
    let nextMonthPrep = nextMonthDate.getMonth()*1 + 1;
    let nextMonth = nextMonthPrep<10 ? "0" + nextMonthPrep : nextMonthPrep;
    let nextMonthDay = nextMonthDate.getDate();
    if(nextMonthDay*1 < day*1){
      let tempDate = new Date(year,monthPrep*1+1,0);
      nextMonthDay = tempDate.getDate();
    }
    dates.start = year+"-"+month+"-"+day;
    dates.end = nextMonthDate.getFullYear()+"-"+nextMonth+"-"+nextMonthDay;
    return dates;
  },

  getTimePeriod: function (startDate, endDate){
    timePeriod = [];
    start = Date.parse(startDate + adjust);
    end = Date.parse(endDate + adjust);
    console.log("start: " + start);
    console.log("end: " + end);
    for(let bill of budget.bills){
      console.log("bill: " + bill.name);
      this.addBill(bill);
    }
    let output = this.showOutput();
    console.log("output: " + output);
    return output;
  },


  addBill: function (bill){
    switch (bill.freq){
      case "m":
        this.addMonthlyBill(bill);
        break;
      case "y":
        this.addYearlyBill(bill)
        break;
      case "s":
        this.addSingleBill(bill);
        break;
      default:
        if(bill.freq > -1){
          this.addDaySpacedBill(bill);
        }
    }
  },

  addMonthlyBill: function (bill){
    let billDate = Date.parse(bill.date + adjust).toString()*1;
    while(billDate <= end*1){
      if(billDate >= start*1){
        this.addToPeriod(bill, billDate);
      }
      let converted = new Date(billDate);
      let nextMonth = new Date(converted.getFullYear(),converted.getMonth()+1,converted.getDate())
      billDate = nextMonth.getTime().toString()*1;
    }
  },

  addYearlyBill: function (bill){
    let billDate = Date.parse(bill.date + adjust).toString()*1;
    while(billDate <= end*1){
      if(billDate >= start*1){
        this.addToPeriod(bill, billDate);
      }
      let converted = new Date(billDate);
      let nextYear = new Date(converted.getFullYear() + 1,converted.getMonth(),converted.getDate())
      billDate = nextYear.getTime().toString()*1;
    }
  },

  addSingleBill: function (bill){
    let billDate = Date.parse(bill.date + adjust).toString()*1;
      if(billDate <= end*1 && billDate >= start*1){
        this.addToPeriod(bill, billDate);
      }
  },

  addDaySpacedBill: function (bill){
    let billDate = Date.parse(bill.date + adjust).toString()*1;
    while(billDate <= end*1){
      if(billDate >= start*1){
        this.addToPeriod(bill, billDate);
      }
      billDate += bill.freq*24*3600*1000;
    }
  },

  addToPeriod: function (bill, billDate){
    let obj = {...bill};
    delete obj.freq;
    obj.date = billDate;
    timePeriod.push(obj)
  },

  showOutput: function (){
    let sortedTimePeriod = timePeriod.sort((a,b)=>a.date*1-b.date*1);
    let total = 0;
    total=budget.mileStoneAmount;
    let output = sortedTimePeriod.map((item)=>{
      if(item.income){
        total += item.amount*1;
      }else{
        total -= item.amount*1;
      }
      item.total = total.toFixed(2);
      let itemDate = new Date(item.date);
      item.prettyDate = months[itemDate.getMonth()] + " " + itemDate.getDate();
      return item;
    });
    return output;
  }

}

export default BudgetService;
