import Ember from 'ember';
import config from './config/environment';

Bouncer.Router.reopen({
  location: config.locationType
});

export default Bouncer.Router.map(function() {
  this.route('login');
  this.route('users', { path: '/users' }, function() {
    this.route('new');
  });
});
