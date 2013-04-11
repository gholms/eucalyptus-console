define([
  'underscore',
  'backbone',
  'backbone-validation',
  'sharedtags'
], function(_, Backbone, BackboneValidation, tags) {
  _.extend(Backbone.Model.prototype, Backbone.Validation.mixin);
  var EucaModel = Backbone.Model.extend({
    initialize: function() {
        var self = this;

        // Prepopulate the tags for this model
        if (self.get('tags') == null) {
            self.set('tags', new Backbone.Collection(tags.where({res_id: self.get('id')})));
            self.refreshNamedColumns();
        }

        // If global tags are refreshed, update the model
        tags.on('sync add remove reset change', _.debounce(function() {
            self.get('tags').set(tags.where({res_id: self.get('id')}));
        },100));

        // If local tags are refreshed, update the model
        self.get('tags').on('add remove reset change', function() {
            self.refreshNamedColumns();
        });
    },
    set: function(key, val, options) {    
        var attrs; 
        if (key == null) return this;

        if (typeof key === 'object') {
            attrs = key;
            options = val;
        } else {
            (attrs = {})[key] = val;
        }

        options || (options = {});

        if (attrs.tags != null && this.get('tags') != null) {
            this.get('tags').set(attrs.tags.models);
            return this;
        }

        return Backbone.Model.prototype.set.call(this, attrs, options);
    },
    refreshNamedColumns: function() {
        var self = this;
        _.each(this.namedColumns, function(column) {
            var matched = tags.where({res_id: self.get(column), name: 'Name'});
            if (matched.length) {
                var tag = matched[0];
                self.set('display_' + column, tag.get('value'));
            } else {
                self.set('display_' + column, self.get(column));
            }
        });
    }
  });
  return EucaModel;
});
