import Ember from 'ember';

export default Ember.Component.extend({
  isBusy: false,

  actions: {
    create() {
      this.set("isBusy", true);
      this.app.save().then(
        app => this.transitionTo('app', app)
      ).catch(
        reason => this.set("errorMessage", "Unknown error: " + reason.error)
      ).finally(
        () => this.set("isBusy", false)
      );
    }
  }
});
