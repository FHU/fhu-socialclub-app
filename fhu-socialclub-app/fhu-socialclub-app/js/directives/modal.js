app.directive('modal', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/modal.html',
        transclude: true,
        replace: true,
        link: function (scope, elem, attrs) {
            scope.$on('show-modal', function () {
                console.log("heard...")
                document.getElementById('modal').style.display = "block";
            });

            scope.$on('close-modal', function () {
                document.getElementById('modal').style.display = "none";
            });
        }
    };
});

app.directive('addClub', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/add-club.html',
        replace: true,
        transclude: true,
        link: function (scope, elem, attrs) {

        }
    };
});

app.directive('addTeam', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/add-team.html',
        replace: true,
        link: function (scope, elem, attrs) {

        }
    };
});

app.directive('addEvent', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/add-event.html',
        replace: true,
        link: function (scope, elem, attrs) {

        }
    };
});

app.directive('addApplication', function () {
    return {
        restrict: 'E',
        templateUrl: 'templates/modal.html',
        link: function (scope, elem, attrs) {

        }
    };
});