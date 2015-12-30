import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr('string'),
  title: DS.attr('string'),
  brewery: DS.belongsTo('brewery'),
  user: DS.belongsTo('user')
});
