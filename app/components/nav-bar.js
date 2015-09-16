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
        $('#js-navigation-menu').slideToggle(function(){
          if($('#js-navigation-menu').is(':hidden')) {
            $('#js-navigation-menu').removeAttr('style');
          }
        });
    });
  }
});


