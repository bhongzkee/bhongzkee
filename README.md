# herminio.delacruz
## To run the test

### > npm install --save-dev
### > protractor conf_jasmine.js --suite sampleApiTest


### Result should be like this
  API Endpoints Tests\n
    \tPASSED - User Has Able To Reset List Of Countries Data\n
    \tFAILED - User Has Able To Fetch List Of Countries Without Authorization\n
      \t\t- Expected 403 to be 200.\n
    \tPASSED - User Has Able To Fetch List Of Countries With Authorization\n
    \tPASSED - User Has Able To Updated A PHILIPPINES Country Population\n
    \tFAILED - User Has Fetch List Of Countries Sorted Order-Asc By Population After Update - Last PHILIPPINES\n
      \t\t- Expected 'ZIMBABWE' to be 'PHILIPPINES'.\n
    \tFAILED - User Has Fetch List Of Countries Sorted Order-Desc By Population After Update - First PHILIPPINES\n
      \t\t- Expected 'AFGHANISTAN' to be 'PHILIPPINES'.\n
    \tFAILED - User Has Able To Delete Country\n
      \t\t- Expected 500 to be 204.\n