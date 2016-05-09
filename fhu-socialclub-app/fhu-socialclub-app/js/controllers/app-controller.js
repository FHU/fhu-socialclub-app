app.controller("AppController", ["$scope", "$location", '$window', function ($scope, $location, $window) {

    $scope.reloadView = function () {
        $window.location.reload();
    }

    $scope.currentUser = {
        "username": "jesse.lloyd",
        "firstName": "Jesse",
        "lastName": "Lloyd"
    }

    $scope.showModal = function () {
        console.log("Showing modal...");
        $scope.$broadcast("show-modal");
    }

    $scope.closeModal = function () {
        console.log("Closing modal...");
        $scope.$broadcast("close-modal");
    }
}]);