import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.findRecord('brewery', params.brewery_id);
  },

  actions: {
    saveEdits: function(brewery) {
      var _that = this;
      brewery.save();
      _that.transitionTo('states.state.brewery', brewery);
    },

    deleteBrewery: function(brewery) {
      var _that = this;
      brewery.destroyRecord();
      _that.transitionTo('states.state.breweries');

    }    
  }
});
