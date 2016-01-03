import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  address: DS.attr('string'),
  state: DS.belongsTo('state'),
  
  city: DS.attr('string'),
  postal_code: DS.attr('string'),
  latitude: DS.attr('string'),
  longitude: DS.attr('string'),
  open_to_public: DS.attr('boolean'),
  description: DS.attr('string'),
  website: DS.attr('string'),
  established: DS.attr('string'),
  icon_image: DS.attr('string'),
  medium_image: DS.attr('string'),
  large_image: DS.attr('string'),
  square_medium_image: DS.attr('string'),
  square_large_image: DS.attr('string'),
  beers: DS.hasMany('beer'),
  reviews: DS.hasMany('review')
});

