app.controller('ApplicationsController', ['$scope', function ($scope) {
    $scope.applications = [
        {
            "id": 1,
            "name": "Freshmen Social Club Form",
            "questionMaps": {},
            "recipients": [],
            "startDate": "Sep 1st Annually",
            "endDate": "Sep 20th Annually",
            "isApproved": true,
            "description": "In order for Freshmen students to join a social club when they arrive at Freed, it is essential to complete this form. Once you have completed your application, you will be registered for the mixer process. You will receive notifications when the mixers are coming up.",
            "authorId": 1,
            "isDenied": false
        },
        {
            "id": 2,
            "name": "Social Club Jump Form",
            "questionMaps": {},
            "recipients": [],
            "startDate": "Recurring",
            "endDate": "Recurring",
            "isApproved": true,
            "description": "If a student wishes to switch their social club, this application is available throughout the semester and is limited to one use per semester. Following completion of this aplication, it will be reviewed and you will be notified of the outcome.",
            "authorId": 1,
            "isDenied": false
        }
    ]
}])