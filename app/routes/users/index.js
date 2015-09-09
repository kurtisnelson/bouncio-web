import Ember from 'ember';
var UsersIndexRoute;

UsersIndexRoute = Ember.Route.extend({
  model: function() {
    return this.store.findAll('user');
  }
});

export default UsersIndexRoute;
