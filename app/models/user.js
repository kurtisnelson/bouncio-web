import DS from 'ember-data';
var User;

User = DS.Model.extend({
  email: DS.attr(),
  password: DS.attr(),
  app: DS.belongsTo('app')
});

export default User;
