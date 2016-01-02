import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'div',
  classNames: ['state-logo'],

  state: null,

  stateLink: Ember.computed('state', function(){
    var lowerCase = this.get('state').replace(/\s/,"-").toLowerCase();
    return "assets/images/state-icons/state-" + lowerCase + ".png";     
  })

});
