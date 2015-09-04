`import Ember from 'ember'`

SignUpComponent = Ember.Component.extend {
  actions:
    register: ->
      @user.save().then(-> @transitionToRoute 'application').catch(-> )
}

`export default SignUpComponent`
