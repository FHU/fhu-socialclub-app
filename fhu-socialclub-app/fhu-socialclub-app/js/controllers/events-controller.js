app.controller('EventsController', ['$scope', function ($scope) {
    $scope.events = [
        {
            "id": 1,
            "location": "Chickasaw Retreat",
            "applicationId": 1
        },
        {
            "id": 2,
            "location": "Bobsville, USA",
            "applicationId": 2
        }
    ];
}])