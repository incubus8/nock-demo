const nock = require('nock')

const url1 = 'http://www.example.com'

function scope1() {
  return nock(url1)
  .get('/status')
  .reply(200, { status: 'up' });
}

function scope2() {
  return nock(url1)
  .get('/meat')
  .reply(200, { meat: ['beef', 'chicken'] })
}

module.exports = {
  scope1,
  scope2
}
