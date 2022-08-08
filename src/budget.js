const budget = {
  mileStoneDate: "2022-02-25",
  mileStoneAmount: 1000.25,
  bills:[
    { name: "Key Bank CC",
      date: "2022-01-15",
      freq: "m",
      amount: 15.25,
      income: false
    },
    { name: "Phone",
      date: "2022-01-10",
      freq: "30",
      amount: 5.75,
      income: false
    },
    { name: "Car registration",
      date: "2022-05-01",
      freq: "y",
      amount: 10.50,
      income: false
    },
    { name: "Library Fee",
      date: "2022-05-05",
      freq: "s",
      amount: 31,
      income: false
    },
    { name: "Sollus Money",
      date: "2022-04-27",
      freq: "s",
      amount: 75.17,
      income: true
    }
  ]
}

export default budget;
