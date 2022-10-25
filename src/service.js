import budget from './budget.js';

const Service = {

  getBudget: function(){
    return budget;
  },

  saveBudget: function(newBudget){
    let structure = budget.structure;
    for(let key in newBudget){
      if(structure.indexOf(key)==-1){
        delete newBudget[key];
      }
    }
    let budgetStr = JSON.stringify(newBudget);

    fetch('http://localhost:3002/updateBudget', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: budgetStr
    })
    // .then(res => res.json())
      .then(res => console.log(res.status))
      .catch(e => alert("Didn't save"));
  }
}

export default Service;
