Ext.define('MyApp.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    model: 'MyApp.model.Personnel',

    data: { items: [
        { clientName: 'Jean Luc', email: "jeanluc.picard@enterprise.com", clientContact: "555-111-1111", clientCode: "001" },
        { clientName: 'Worf',     email: "worf.moghsson@enterprise.com",  clientContact: "555-222-2222" },
        { clientName: 'Deanna',   email: "deanna.troi@enterprise.com",    clientContact: "555-333-3333" },
        { clientName: 'Data',     email: "mr.data@enterprise.com",        clientContact: "555-444-4444" }
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
