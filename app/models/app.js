import DS from 'ember-data';
var App;

App = DS.Model.extend({
  name: DS.attr('string')
});

export default App;
