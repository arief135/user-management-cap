sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'adminuser/test/integration/FirstJourney',
		'adminuser/test/integration/pages/UsersList',
		'adminuser/test/integration/pages/UsersObjectPage'
    ],
    function(JourneyRunner, opaJourney, UsersList, UsersObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('adminuser') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheUsersList: UsersList,
					onTheUsersObjectPage: UsersObjectPage
                }
            },
            opaJourney.run
        );
    }
);