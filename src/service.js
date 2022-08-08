import budget from './budget.js';

const Service = {

  getBudget: function(){
    return budget;
  },

  saveBudget: function(budget){
    console.log("Budget:");
    console.log(JSON.stringify(budget));
  }

}


export default Service;
