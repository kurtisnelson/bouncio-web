import Ember from 'ember';

export default Ember.Route.extend({
  renderTemplate() {
    this.render("apps/new");
  },

  model() {
    return this.store.createRecord('app');
  },

  deactivate() {
    this.currentModel.rollbackAttributes();
  }
});
