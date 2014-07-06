export default Ember.ArrayController.extend({

    datatableColumns: [{
        "sTitle": "Title",
        "mData": "title"
    }, {
        "sTitle": "Author",
        "mData": "author"
    }, {
        "sTitle": "Actions",
        "mRender": function() {
            return '<a class="btn btn-sm btn-primary edit-control">Edit</a>' +
                '<a class="btn btn-sm btn-primary show-control">Show</a>' +
                '<a class="btn btn-sm btn-danger delete-control">Delete</a>';
        },
        "class": 'actions',
        "orderable": false,
        "data": "",
    }],

    actions: {
        submit: function() {
              debugger
            this.get('selection').save().then(function(rec) {
                console.log("books: save successful");

                // notify datatable that the content have change - rerender
            //    this.notifyPropertyChange('content'); 

                this.transitionToRoute('books');
            }.bind(this), function(error) {
                console.log(error);
            });
        },

        delete: function(book) {
          book.destroyRecord();
        },

        cancel: function() {
            this.transitionToRoute('books');
        }
    }
});
