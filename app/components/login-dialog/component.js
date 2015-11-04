import Ember from 'ember';

export default Ember.Component.extend({
  isBusy: false,
  actions: {
    busy(b) {
      this.set('isBusy', b)
    }
  }
});
