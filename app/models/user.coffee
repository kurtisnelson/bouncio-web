`import DS from 'ember-data'`

User = DS.Model.extend {
  email: DS.attr()
  password: DS.attr()
}

`export default User`
