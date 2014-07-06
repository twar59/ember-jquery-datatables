export default Ember.Component.extend({
    tagName: 'div',
    classNames: ['ember-dataTable-container'],

    didInsertElement: function() {
        var self = this;
        var theController = this.get('value');

        this.$('.table').dataTable({
            "bProcessing": true,
            "aaData": theController.getEach('data').filter(function(item) {return item.id; }),
            "aoColumns": theController.get('datatableColumns'),
        });

        this.$('.table .delete-control').on('click', function() {
            self.actionOnRow(this, function(row) {
                if (window.confirm("Are you sure you want to delete this record?")) {
                    row.destroyRecord();
                }
            });
        });

        this.$('.table .edit-control').on('click', function() {
            self.actionOnRow(this, function(row) {
                theController.transitionToRoute("book.edit", row);
            });
        });

        this.$('.table .show-control').on('click', function() {
            self.actionOnRow(this, function(row) {
                theController.transitionToRoute("books.show", row);
            });
        });

    },

    actionOnRow: function(target, action) {
        var table = this.$('.table').DataTable();
        var tr = $(target).parents('tr');
        var rowContent = table.row(tr).data();
        var row = this.get('value').content.findBy('id', rowContent.id);
        action(row);
    },

    changeContent: function() {
        console.log('changeContent');
        this.rerender();
    }.observes('value.@each'),
});
