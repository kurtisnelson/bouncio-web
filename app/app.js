import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';
if(config.environment === 'production') {
  Raven.config('https://7db321e27b554aa1a29d1e3455ea7fb8@app.getsentry.com/57384',{
    release: $("meta[name='sentry:revision']").attr('content')
  }).install();
}
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js', {scope: './'})
}
var Bouncio;

Ember.MODEL_FACTORY_INJECTIONS = true;

Bouncio = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

loadInitializers(Bouncio, config.modulePrefix);

export default Bouncio;
