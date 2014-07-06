export default Ember.Route.extend({
    //controllerName: 'book',

    renderTemplate: function() {
      this.render('books.form');
    },

    model: function() {
      //return this.store.createRecord('book');
      //return this.store.find('book');
    },

    setupController: function(controller, model) {
      //this.controllerFor('books')
      //controller.set('selection', this.store.createRecord('book'));
      controller.set('model', this.store.createRecord('book'));
    },


    deactivate: function () {
      // this is meant to rollback a 'cancel'
      // do we need to guard against rollingback a submit
      // this.currentModel.rollback();
    }
});

