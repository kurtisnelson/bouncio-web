import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),

  valid_password: Ember.computed('password', function(){
    return this.get("password") && this.get("password").length >= 8;
  }),

  valid_email: Ember.computed('email', function(){
    return this.get("email") && this.get("email").length >= 3;
  }),

  can_submit: Ember.computed('valid_password', 'valid_email', 'isBusy', function(){
    return this.get("valid_password") && this.get("valid_email");
  }),
  cannot_submit: Ember.computed('can_submit', function() {
    return !this.get('can_submit')
  }),

  actions: {
    login() {
      this.sendAction('busy', true)
      let data = this.getProperties('email', 'password');
      data.identification = data.email;
      this.get('session').authenticate('authenticator:oauth2', data).catch((reason) => {
        if(reason.error == "invalid_request") {
          this.set('errorMessage', "Invalid credentials");
        } else if(reason.error) {
          this.set('errorMessage', "Unknown error: " + reason.error)
        }else {
          this.set('errorMessage', "Login failed, check your internet")
        }
      }).finally(() => {
        this.sendAction('busy', false)
      });
    }
  }
});
