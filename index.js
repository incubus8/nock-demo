const demoNock = require('./demo.nock')
const rp = require('request-promise-native')

async function requests() {
  const url1 = 'http://www.example.com'

  const {body: status} = await rp({
    method: 'GET',
    url: `${url1}/status`,
    json: true,
    resolveWithFullResponse: true
  })

  const {body: meat} = await rp({
    method: 'GET',
    url: `${url1}/meat`,
    json: true,
    resolveWithFullResponse: true
  })

  return { status, meat }
}

async function start() {
  const scope = demoNock.scope1()
  const scope2 = demoNock.scope2()

  const { status, meat } = await requests()

  scope.done()
  scope2.done()

  console.log(status)
  console.log(meat)

  return { status,meat }
}

start()
