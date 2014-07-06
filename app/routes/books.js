export
default Ember.Route.extend({
//    model: function() {
        //console.log("load model in books route");
        //return this.store.find('book');
  //  },

    setupController: function(controller, model) {
        console.log("setupController: load model in books route");
        controller.set('model', this.store.find('book'));
    },
});
