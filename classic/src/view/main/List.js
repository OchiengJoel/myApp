/**
 * This view is an example list of people.
 */
Ext.define('MyApp.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'MyApp.store.Personnel'
    ],

    title: 'Client List',

    store: {
        type: 'personnel'
    },

    initComponent: function () {
            Ext.apply(this,
            {
                plugins: [Ext.create('Ext.grid.plugin.RowEditing',
                {
                    clicksToEdit: 2
                })],

    columns: [
        { text: 'ID',
          dataIndex: 'Id'
        },

        { text: 'Client Name',
          dataIndex: 'clientName',
          editor:
          {
          allowBlank: false
          },
        },

        { text: 'Email',
          dataIndex: 'email',
          flex: 1,
          editor:
          {
          allowBlank: false
          },
        },

        { text: 'Phone',
          dataIndex: 'clientContact',
          flex: 1,
          editor:
          {
          allowBlank: true
          },
        },

        { text: 'Code',
          dataIndex: 'clientCode',
          flex: 1,
          editor:
          {
          allowBlank: false
          },
        },

        { text: 'License Renewal After',
          flex: 1,
          dataIndex: 'licenseRenewalAfter',
          editor:
          {
          xtype: 'datefield'
          },
          renderer: Ext.util.Format.dateRenderer('d/m/Y')
        }

    ],

    listeners: {
        select: 'onItemSelected'
    }
});
