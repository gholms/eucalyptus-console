define(['./astag', './eucacollection'], function(ASTag, EucaCollection) {
  return EucaCollection.extend({
    model: ASTag,
    url: '/autoscaling?Action=DescribeTags',
//    url: function(models) {
//      console.log('fetching AS tags', models);
//      var uri = '/autoscaling?Action=DescribeTags';
//      _.each(models, function(model, i) {
//        uri += '&Filters.member.' + (i+1) + '.auto-scaling-group=' + model.get('name');
//      });
//      return uri;
//    }
  });
});
