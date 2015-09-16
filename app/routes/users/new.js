import Ember from 'ember';

export default Ember.Route.extend({
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
