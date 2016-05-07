app.controller('ClubsController', ['$scope', function ($scope) {
    $scope.clubs = [
        {
            "minSize": 50,
            "description": "A club that represents the eagle of valor! You are sure to enjoy this club if you value friendships and meeting together for worship. With regular devotionals, you are sure to grow spiritually.",
            "roster": null,
            "emblemImageUrl": "http://www.fhu.edu/images/default-source/student-life-imgs/xbx.png",
            "max-size": 150,
            "id": 1,
            "name": "Chi Beta Chi"
        }, {
            "description": "This is the oldest club on campus. Pretty neat, right? Filled with pride and great friendships, Sigma Rho is the pal",
            "emblemImageUrl": "http://www.fhu.edu/images/default-source/student-life-imgs/ep.png",
            "minSize": 50,
            "maxSize": 150,
            "id": 2,
            "name": "Sigma Rho"
        }, {
            "minSize": 100,
            "maxSize": 200,
            "id": 3,
            "emblemImageUrl": "http://www.fhu.edu/images/default-source/student-life-imgs/pka.png",
            "name": "Phi Kappa Alpha"
        }, {
            "minSize": 15,
            "maxSize": 80,
            "id": 4,
            "emblemImageUrl": "http://www.fhu.edu/images/default-source/student-life-imgs/xcd.png",
            "name": "Xi Chi Delta"
        }, {
            "minSize": 15,
            "maxSize": 50,
            "id": 5,
            "emblemImageUrl": "http://www.fhu.edu/images/default-source/student-life-imgs/gto.png",
            "name": "Gamma Tau Omega"
        }, {
            "minSize": 15,
            "maxSize": 80,
            "id": 6,
            "emblemImageUrl": "http://www.fhu.edu/images/default-source/student-life-imgs/tne.png",
            "name": "Theta Nu"
        }
    ];
}]);