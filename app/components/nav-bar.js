import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),
  actions: {
    logout() {
      this.get('session').invalidate();
    }
  },

  didInsertElement() {
    var menuToggle = Ember.$('#js-mobile-menu').unbind();
    Ember.$('#js-navigation-menu').removeClass("show");
    menuToggle.on('click', e => {
        e.preventDefault();
        Ember.$('#js-navigation-menu').slideToggle(function(){
          if(Ember.$('#js-navigation-menu').is(':hidden')) {
            Ember.$('#js-navigation-menu').removeAttr('style');
          }
        });
    });
  }
});


