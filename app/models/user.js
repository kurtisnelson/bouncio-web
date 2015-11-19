import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr("string"),
  maskedEmail: DS.attr("string"),
  password: DS.attr(),
  emailVerified: DS.attr("date"),
  app: DS.belongsTo("app")
});
