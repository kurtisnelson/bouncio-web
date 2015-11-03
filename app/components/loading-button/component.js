import Ember from 'ember';

export default Ember.Component.extend({
  tagName: "button",
  isSpinning: false,
  enabled: true,
  attributeBindings: ["disabled"],

  disabled: Ember.computed('enabled', 'isSpinning', function() {
    return this.get('isSpinning') || !this.get('enabled')
  })
});
