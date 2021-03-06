export default Ember.ObjectController.extend({
  //title: '',
  //author: '',

  actions: {

    submit: function() {
        //var book = this.store.createRecord('book', {
          //title: this.get('title'),
          //author: this.get('author'),
        //}) 
        //book.save().then(function(rec) {
          debugger;
        this.get('content').save().then(function(rec) {
          console.log("save successful");

          // notify datatable that the content have change - rerender
          this.notifyPropertyChange('content'); 

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
