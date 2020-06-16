const csvtoJson = require('csvtojson');
const fs = require('fs');
const path = require('path');
const filePath = ('./customer-data.xls');
csvtoJson().fromFile('customer-data.xls')
.then(users =>
  {
    console.log(users)
    let customerData = JSON.stringify(users, null, 2);
    fs.writeFileSync(path.join(__dirname, 'customers.json' ), customerData);
  })
  .catch(err =>
    {
      console.log(err)
    })