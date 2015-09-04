`import Ember from 'ember'`

SignUpComponent = Ember.Component.extend {
  valid_password: (->
    @get("user.password") && @get("user.password").length >= 8
  ).property("user.password")
  cannot_submit: (->
    !@get("valid_password") || !@get("passwords_match")
  ).property("valid_password", "passwords_match")
  passwords_match: (->
    @get('confirmPassword') == @get('user.password')
  ).property("user.password", "confirmPassword"),
  actions:
    register: ->
      if @get('passwords_match')
        self = @
        @user.save().then(-> self.sendAction )
      else
        alert("Passwords do not match")
}

`export default SignUpComponent`
