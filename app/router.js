import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('states', function() {
    this.route('state', { path: ':state_id' }, function() {
      this.route('breweries');
      this.route('brewery', {path: 'breweries/:brewery_id'}, function() {
        this.route('reviews', function() {});
        this.route('info');
        this.route('beers');
      });
      this.route('create-brewery');
      this.route('edit-brewery', {path: 'breweries/:brewery_id/edit'});
    });
  });
});

export default Router;
