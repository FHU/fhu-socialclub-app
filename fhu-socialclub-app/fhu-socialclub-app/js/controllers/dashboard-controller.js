app.controller('DashboardController', ["$scope", function ($scope) {
    $scope.announcements = {
        "general-announcements": {
            "name": "Announcements",
            "items": [
        "Clubs are opening for recruitment this week.",
        "First mixer events are scheduled for tomorrow evening at 8pm. Come prepared to get your attendance recorded by each club!",
        "Registration and Declaration of Majors for Freshmen is available until this Friday."
            ]
        },
        "club-announcements": {
            "name": "Club Activities",
            "items": [
                    "XBX Chickasaw Retreat",
                    "ON Friendship Picnic",
                    "EP Rumble Rally"
            ]
        },
        "sports-announcements": {
            "name": "Sports",
            "items": [
                    "Mon Apr 22nd | Softball - PKA Bad Boys vs. XBX Eagles",
                    "Tues Apr 23rd | Volleyball - XCD Titans vs. GTO Marauders",
                    ""
            ]
        }
    };
}]);