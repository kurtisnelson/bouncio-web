import Ember from "ember";
import config from "./config/environment";

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("login");
  this.route("register");
  this.route("user", { path: "/users/:id" });
  this.route("users", function() {
    this.route("new");
  });
  this.route("app", { path: "/apps/:id" });
  this.route("apps", { path: "/apps" }, function() {
    this.route("new");
  });
});

export default Router;
