import DS from 'ember-data';
import ENV from '../config/environment';
var ApplicationAdapter;

ApplicationAdapter = DS.JSONAPIAdapter.extend({
  host: ENV.APP.apiHost
});

export default ApplicationAdapter;
