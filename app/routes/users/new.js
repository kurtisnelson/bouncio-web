import Ember from 'ember';
var UsersNewRoute;

UsersNewRoute = Ember.Route.extend({
  model: function() {
    return this.store.createRecord('user');
  }
});

export default UsersNewRoute;
