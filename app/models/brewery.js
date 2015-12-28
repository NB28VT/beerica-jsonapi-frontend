import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  address: DS.attr('string'),
  state: DS.belongsTo('state'),
  beers: DS.hasMany('beer')
});

