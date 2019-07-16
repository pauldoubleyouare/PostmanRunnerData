// const { Parser } = require('json2csv');
const responseData = require('./responseDataTest.json');
const fs = require('fs');

// Process:
// 1. fetch large JSON file
// 2. pick out the fields we need, in this case let's go with RDP ID
// 3. For each object inside of the data[] aray (responseData[0].data), push those into a new array (recurringIds)
// 4. write these numbers to a CSV

let rdpIds = []
let data = responseData[0].data; 

data.forEach((rdp) => {
  rdpIds.push(rdp.id);
});

fs.writeFileSync('RecurringPlanIDs.csv', rdpIds, (err) => {
  if (err) throw err;
  console.log('RDPs have been saved!')
})

console.log("FIRST RESPONSE>>>>", rdpIds)