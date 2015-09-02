`import DS from 'ember-data'`
`import ENV from '../config/environment'`

ApplicationAdapter = DS.RESTAdapter.extend {
  host: ENV.APP.apiHost
}

`export default ApplicationAdapter`
