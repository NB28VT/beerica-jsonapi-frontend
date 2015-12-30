import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.modelFor('states.state.brewery', params.brewery_id);
  },

  actions: {
    createReview: function(brewery){
      var _that = this;

      var title = this.get('controller').get('title');
      var content = this.get('controller').get('content');

      var newRecord = this.store.createRecord('review', {
        title: title,
        content: content,
        brewery: brewery
      });

      newRecord.save();

      _that.transitionTo('states.state.brewery', brewery);

    }    
  }
});
