var app = require('./server.js');
var db = app.get('db');
var exec = require('child_process').exec;
const fs = require('fs');

module.exports = {

  updateBudget: function (req, res) {
      var budget = req.body;
      let budgetStr =JSON.stringify(budget);
      let content = "const budget =" + budgetStr + "\n\nexport default budget;";
      content = content.replace(/},{/g,"},\n{");
      content = content.replace(/,"/g,',\n"');

      try {
        fs.writeFileSync('./src/budget.js', content);
        console.error("success?");
      } catch (err) {
        return res.send(err);
      }
      return res.send({data:"budget updated?"});
  }

}
