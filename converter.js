
const responseData = require('./responseData.json');
const _ = require('lodash');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// Process:
// 1. fetch large JSON file
// 2. pick out the fields we need, in this case let's go with RDP and designation_id
// 3. write these items to a CSV

let outputArr = [];

responseData.forEach((object) => {
  outputArr.push(_.pick(object, ['id', 'designation_id']));
});

const csvWriter = createCsvWriter({
  path: 'rdp_and_designations_cid_53327.csv',
  header: [
    {id: 'id', title: 'Recurring ID'},
    {id: 'designation_id', title: 'Designation ID'}
  ]
});

csvWriter
  .writeRecords(outputArr)
  .then(() => console.log('CSV HAS BEEN WRITTEN MY LORD'));