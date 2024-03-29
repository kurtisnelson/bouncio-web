import Ember from 'ember';

export default Ember.Component.extend({
  isBusy: false,
  valid_password: (function() {
    return this.get("user.password") && this.get("user.password").length >= 8;
  }).property("user.password"),
  cannot_submit: (function() {
    return !this.get("valid_password") || !this.get("passwords_match");
  }).property("valid_password", "passwords_match"),
  passwords_match: (function() {
    return this.get('confirmPassword') === this.get('user.password');
  }).property("user.password", "confirmPassword"),

  actions: {
    register: function() {
      var self;
      if (this.get('passwords_match')) {
        this.set('isBusy', true)
        self = this;
        return this.user.save().then(function() {
          self.sendAction;
        }).finally( ()=>
          this.set('isBusy', false)
        );
      } else {
        return alert("Passwords do not match");
      }
    }
  }
});
