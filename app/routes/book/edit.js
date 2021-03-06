export
default Ember.Route.extend({
    controllerName: 'books',

    model: function(params) {
        return this.store.all('book').findBy('id', params.book_id);
    },

    renderTemplate: function() {
        this.render('books.form');
    },

    deactivate: function() {
        // this is meant to rollback a 'cancel'
        // do we need to guard against rollingback a submit
        this.currentModel.rollback();
    }
});
