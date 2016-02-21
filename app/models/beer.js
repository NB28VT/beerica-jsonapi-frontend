import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  abv: DS.attr('string'),  
  medium_label: DS.attr('string'),  
  large_label: DS.attr('string'),  
  icon: DS.attr('string'),
  brewery: DS.belongsTo('brewery')
});
