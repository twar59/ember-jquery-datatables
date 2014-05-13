export default Ember.ObjectController.extend({
  actions: {
    cancel: function() {
      this.transitionToRoute('books');
    }
  }
});
