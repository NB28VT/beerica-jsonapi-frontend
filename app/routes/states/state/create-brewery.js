import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.modelFor('states.state', params.state_id)
  },

  actions: {
    createBrewery: function(state){
      var _that = this;

      var name = this.get('controller').get('name');
      var address = this.get('controller').get('address');

      var newRecord = this.store.createRecord('brewery', {
        name: name,
        address: address,
        state: state
      });

      newRecord.save();

      _that.transitionTo('states.state.brewery', newRecord);

    }

  }

});
