import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin, {
  model() {
    let user = this.store.createRecord('user');
    this.store.findRecord('app', "00000000-0000-0000-0000-000000000000").then(app =>
      user.set('app', app)
    );
    return user;
  },

  deactivate() {
    this.currentModel.rollbackAttributes();
  }
});
