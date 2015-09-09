import Ember from 'ember';

export default Ember.Component.extend({
  valid_password: (function() {
    return this.get("password") && this.get("password").length >= 8;
  }).property("password"),
  valid_email: (function() {
    return this.get("email") && this.get("email").length >= 3;
  }).property("email"),
  cannot_submit: (function() {
    return !this.get("valid_password") || !this.get("valid_email");
  }).property('valid_password')
});
