import Ember from 'ember';

var Router = Ember.Router.extend({
  location: EmberJqueryDatatablesENV.locationType
});

Router.map(function() {
    this.resource("books", function() {
        this.route('new');
        this.resource('book', { path: ':book_id' }, function() {
            this.route('show', { path: '/' });
            this.route('edit', { path: '/edit' });
        });
    });
});



export default Router;
