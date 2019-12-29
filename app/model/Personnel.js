Ext.define('MyApp.model.Personnel', {
    extend: 'MyApp.model.Base',

    fields: [
        { name: 'Id', type: 'int', defaultValue: 0},
        { name: 'clientName', type: 'string' },
        { name: 'email', type: 'string' },
        { name: 'clientCode', type: 'string' },
        { name: 'clientContact', type: 'string' },
        { name: 'licenseRenewalAfter', type: 'string' }
        /*'name', 'email', 'phone','Code','License Renewal After'*/
    ],
    validations: [{
            type: 'presence',
            field: 'clientName'
        }]
});
