export
default Ember.ArrayController.extend({
    datatableColumns: [{
        "class": 'show-control',
        "orderable": false,
        "data": "",
        "defaultContent": 'Show'
    }, {
        "class": 'edit-control',
        "orderable": false,
        "data": "",
        "defaultContent": 'Edit'
    }, {
        "class": 'remove-control',
        "orderable": false,
        "data": "",
        "defaultContent": 'Delete'
    }, {
        "sTitle": "Author",
        "mData": "author"
    }, {
        "sTitle": "Title",
        "mData": "title"
    }],

    actions: {
        delete: function(book) {
            book.destroyRecord();
        },

    },


});
