
const responseData = require('./responseData.json');
const _ = require('lodash');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// Process:
// 1. fetch large JSON file
// 2. pick out the fields we need, in this case let's go with RDP ID
// 3. For each object inside of the data[] aray (responseData[0].data), push those into a new array (recurringIds)
// 4. write these numbers to a CSV
// let parsedData = JSON.parse(responseData);

let arrData = [];

newData = responseData.forEach((object) => {
  arrData.push(_.pick(object, ['id', 'designation_id']));
});

const csvWriter = createCsvWriter({
  path: 'rdp_and_designations_cid_53327.csv',
  header: [
    {id: 'id', title: 'Recurring ID'},
    {id: 'designation_id', title: 'Designation ID'}
  ]
});

csvWriter
  .writeRecords(arrData)
  .then(() => console.log('CSV HAS BEEN WRITTEN MY LORD'));