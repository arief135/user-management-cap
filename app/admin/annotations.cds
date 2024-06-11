using UserService as service from '../../srv/admin-service';

annotate service.Users with @(
    UI.FieldGroup #GeneratedGroup: {
        $Type: 'UI.FieldGroupType',
        Data : [
            {
                $Type: 'UI.DataField',
                Label: 'username',
                Value: username,
            },
            {
                $Type: 'UI.DataField',
                Label: 'email',
                Value: email,
            },
            {
                $Type: 'UI.DataField',
                Label: 'password',
                Value: password,
            },
            {
                $Type: 'UI.DataField',
                Label: 'active',
                Value: active,
            },
            {
                $Type: 'UI.DataField',
                Label: 'lastLoggedIn',
                Value: lastLoggedIn,
            },
        ],
    },
    UI.Facets                    : [{
        $Type : 'UI.ReferenceFacet',
        ID    : 'GeneratedFacet1',
        Label : 'General Information',
        Target: '@UI.FieldGroup#GeneratedGroup',
    }, ],
    UI.LineItem                  : [
        {
            $Type: 'UI.DataField',
            Label: 'username',
            Value: username,
        },
        {
            $Type: 'UI.DataField',
            Label: 'email',
            Value: email,
        },
        {
            $Type: 'UI.DataField',
            Label: 'password',
            Value: password,
        },
        {
            $Type: 'UI.DataField',
            Label: 'active',
            Value: active,
        },
        {
            $Type: 'UI.DataField',
            Label: 'lastLoggedIn',
            Value: lastLoggedIn,
        },
    ],
);
