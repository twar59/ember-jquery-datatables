export default Ember.ObjectController.extend({
  //title: '',
  //author: '',

  actions: {

    submit: function() {
        this.get('content').save().then(function(rec) {
          console.log("new: save successful");

          // notify datatable that the content have change - rerender
          // this.notifyPropertyChange('content'); 

          this.transitionToRoute('books');
        }.bind(this), function(error) {
          console.log(error);
        });
    },

    cancel: function() {
      this.transitionToRoute('books');
    }
  }
});
