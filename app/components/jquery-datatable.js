export
default Ember.Component.extend({
    tagName: 'div',
    classNames: ['ember-dataTable-container'],
    template: Ember.Handlebars.compile('<table class="table table-striped table-bordered dataTable"></table>'),

    didInsertElement: function() {
        console.log('create datatable');
        var self = this;
        var theController = this.get('value');
        //this.set('value', this.get('ctrl.content'));

        this.$('.table').dataTable({
            "bProcessing": true,
            "aaData": theController.getEach('data'),
            "aoColumns": theController.get('datatableColumns'),
        }),

        this.$('.table td.remove-control').on('click', function() {
            var table = self.$('.table').DataTable();
            var tr = $(this).parents('tr');
            var rowContent = table.row(tr).data();

            if (confirm("Are you sure you want to delete this record?")) {
                theController.content.findBy('id', rowContent.id).destroyRecord();
            }

        })

        this.$('.table td.edit-control').on('click', function() {
            var table = self.$('.table').DataTable();
            var tr = $(this).parents('tr');
            var rowContent = table.row(tr).data();

            var obj = theController.content.findBy('id', rowContent.id);
            theController.transitionToRoute("books.edit", obj );

        })

        this.$('.table td.show-control').on('click', function() {
            var table = self.$('.table').DataTable();
            var tr = $(this).parents('tr');
            var rowContent = table.row(tr).data();

            var obj = theController.content.findBy('id', rowContent.id);
            theController.transitionToRoute("books.show", obj );

        })
    },


    changeContent: function() {
        this.rerender();
    }.observes('value.@each'),

    actions: {
      edit: function(id) {
          debugger;
          theController.transitionTo("books.edit", {id: id} )
      }
    },
});
