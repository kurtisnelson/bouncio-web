import Ember from 'ember';

export default Ember.Component.extend({
  tagName: "button",
  isSpinning: false,
  disabled: false,
  attributeBindings: ['data-style', "disabled"],
  classNames: ['ladda-button'],

  toggleSpinning: Ember.observer('isSpinning', function() {
    let isSpinning  = this.get("isSpinning");
    if (isSpinning){
    } else {
    }
  })
});
