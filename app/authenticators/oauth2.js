// app/authenticators/oauth2.js
import ENV from '../config/environment';
import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';

export default OAuth2PasswordGrant.extend({
    serverTokenEndpoint: ENV.APP.apiHost + '/session',
    serverTokenRevocationEndpoint: ENV.APP.apiHost + '/session'
});
