app.controller('SportsController', ['$scope', function ($scope) {
    $scope.teams = [
        {
            "id": 1,
            "minSize": 5,
            "maxSize": 25,
            "name": "Scofo Penguins",
            "roster": ["Jesse", "Logan", "Cole", "Colton", "Wesley", "Daniel"],
            "affiliationId": null
        },
        {
            "id": 2,
            "minSize": 5,
            "maxSize": 25,
            "name": "XBX Mail Men",
            "roster": ["Tyler", "Micah", "Jonny", "Brendan"],
            "affiliationId": null
        },
        {
            "id": 3,
            "minSize": 5,
            "maxSize": 25,
            "name": "PKA Scoprions",
            "roster": ["Kase", "Jonny", "Reggie", "Lloyd", "Ryan", "Fabian"],
            "affiliationId": null
        }
    ];
}])