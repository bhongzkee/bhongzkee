# herminio.delacruz
## To run the test

### > npm install --save-dev
### > protractor conf_jasmine.js --suite sampleApiTest


### Result should be like this
API Endpoints Tests

PASSED - User Has Able To Reset List Of Countries Data

FAILED - User Has Able To Fetch List Of Countries Without Authorization
Expected 403 to be 200.

PASSED - User Has Able To Fetch List Of Countries With Authorization

PASSED - User Has Able To Updated A PHILIPPINES Country Population

FAILED - User Has Fetch List Of Countries Sorted Order-Asc By Population After Update - Last PHILIPPINES
Expected 'ZIMBABWE' to be 'PHILIPPINES'.

FAILED - User Has Fetch List Of Countries Sorted Order-Desc By Population After Update - First PHILIPPINES
Expected 'AFGHANISTAN' to be 'PHILIPPINES'.

FAILED - User Has Able To Delete Country
Expected 500 to be 204.