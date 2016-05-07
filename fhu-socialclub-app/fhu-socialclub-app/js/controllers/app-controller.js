app.controller("AppController", ["$scope", "$location", '$window', function ($scope, $location, $window) {

    $scope.reloadView = function () {
        $window.location.reload();
    }

    $scope.currentUser = {
        "username": "jesse.lloyd",
        "firstName": "Jesse",
        "lastName": "Lloyd"
    }
}]);