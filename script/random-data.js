var _ = require('underscore')
var faker = require('faker')
var xtend = require('xtend')

var nEntries = 60

var nPeople = 20
var nFirsts = nPeople / 2
var nLasts = nPeople / 2
var nStates = nPeople / 4
var nTransactionsPerPerson = nEntries/nPeople
var nCompanies = nEntries / 10

var firstNames = []
var lastNames = []
var states = []
var companies = []

for (var i = 0; i < nFirsts; i++) firstNames.push(faker.name.firstName())
for (var i = 0; i < nLasts; i++) lastNames.push(faker.name.lastName())
for (var i = 0; i < nStates; i++) states.push(faker.address.stateAbbr())
for (var i = 0; i < nCompanies; i++) companies.push(faker.company.companyName())

var data = []

for (var i = 0; i < nPeople; i++) {
  var person = {
    firstName: _.sample(firstNames),
    lastName: _.sample(lastNames),
    state: _.sample(states)
  }
  
  for (var j = 0; j < nTransactionsPerPerson; j++) {
    var transaction = faker.helpers.createTransaction()
    transaction.business = _.sample(companies)
    data.push(xtend(person, {transaction: transaction}))
  }
}

console.log(JSON.stringify(data, null, 2))
