export default Ember.View.extend({
    classNames:['table','table-striped','table-bordered','dataTable'],
    tagName: 'table',
    didInsertElement: function() {
        if (this.get('value')) {
            var data = this.get('value').getEach('data');
            this.$().dataTable({
                "bProcessing": true,
                "aaData": data,
                "aoColumns": [{
                    "sTitle": "Author",
                    "mData": "author"
                }, {
                    "sTitle": "Title",
                    "mData": "title"
                } ]
            });
        }
    }

});
