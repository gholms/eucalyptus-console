define([
   './landing_page_base',
   'backbone',
   'rivets',
   'text!./landing_page_sgroups.html!strip',
], function(LandingPage, Backbone, rivets, template) {
    return LandingPage.extend({
        initialize: function(args) {
            var self = this;
            this.template = template;
            console.log("LANDING_PAGE: initialize " + args.id);
            this.scope = {
              id: args.id,
              collection: args.collection,
              items: '',
              databox: '',
              clicked_row_callback: function(context, event) {
                // TEMP. SOL: THIS SHOUOLD BE DONE VIA RIVETS TEMPLATE - KYO 080613
                if( self.count_checked_items() === 0 ){
                  $menu = $('#more-actions-'+self.scope.id);
                  $menu.addClass("inactive-menu");
                }else{
                  $menu = $('#more-actions-'+self.scope.id);
                  $menu.removeClass("inactive-menu");
                }
              },
     	      expanded_row_callback: function(e){
                var thisID = e.item.get('id');
                console.log("ITEM ID: " + thisID);
                var $placeholder = $('<div>').attr('id', "expanded-" + thisID).addClass("expanded-row-inner-wrapper");
                if( e.item.get('expanded') === true ){
                  // IF EXPANDED, APPEND THE RENDER EXPANDED ROW VIEW TO THE PREVIOUS PLACEHOLDER, MATCHED BY ITEM'S ID
                  require(['app', 'views/expandos/sgroup'], function(app, expando) {
                    var $el = $('<div>');
                    new expando({el: $el, model: app.data.sgroup.where({id: thisID})[0] });
                    $('#expanded-' + thisID).children().remove();
                    $('#expanded-' + thisID).append($el);
                  });
                }
                // IF NOT EXPANDED, RETURN THE PLACEHOLDER DIV
                return $('<div>').append($placeholder).html();
              },
              expand_row: function(context, event){              
                console.log("Clicked to expand: " + event.item.id);
                if( this.items.get(event.item.id).get('expanded') === true ){
                  this.items.get(event.item.id).set('expanded', false);
                }else{
                  this.items.get(event.item.id).set('expanded', true);
                }
                self.render();
              },
            };
            this._do_init();
            console.log("LANDING_PAGE: initialize end");
        },
    });
});
