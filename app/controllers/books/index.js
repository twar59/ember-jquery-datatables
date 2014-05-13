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

});
