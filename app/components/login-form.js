import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),
  busy: false,

  valid_password: Ember.computed('password', function(){
    return this.get("password") && this.get("password").length >= 8;
  }),

  valid_email: Ember.computed('email', function(){
    return this.get("email") && this.get("email").length >= 3;
  }),

  can_submit: Ember.computed('valid_password', 'valid_email', function(){
    return this.get("valid_password") && this.get("valid_email");
  }),

  actions: {
    login() {
      this.set('busy', true)
      let data = this.getProperties('email', 'password');
      data.identification = data.email;
      this.get('session').authenticate('authenticator:oauth2', data).catch((reason) => {
        if(reason.error) {
          this.set('errorMessage', reason.error);
        } else {
          this.set('errorMessage', "Login failed, check your internet")
        }
      }).finally(() => {
        this.set('busy', false)
      });
    }
  }
});
