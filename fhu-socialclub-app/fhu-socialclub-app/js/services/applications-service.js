app.factory('ApplicationsService', function ($http) {
    var applicationsFactory = {};

    var config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    };

    applicationsFactory.getApplications = function () {

    }

    applicationsFactory.createApplication = function (application) {
        return $http.post("/api/applications", application, config);
    }

    return applicationsFactory;
});