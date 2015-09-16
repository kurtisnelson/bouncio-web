import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

var Bouncio;

Ember.MODEL_FACTORY_INJECTIONS = true;

Bouncio = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

loadInitializers(Bouncio, config.modulePrefix);

export default Bouncio;
