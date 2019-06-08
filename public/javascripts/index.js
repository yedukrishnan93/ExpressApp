var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope, $http) {
  $scope.count = 0;
  $scope.objArray = [];
  $scope.filmArray = [];
  $scope.filmDetails = [];
  $scope.actorDetails = [];

  $scope.title = null;
  $http.get("http://localhost:3000/api/categories").then(
    data => {
      console.log(data);
      $scope.objArray = data.data;
    },
    err => {
      console.log(err);
    }
  );
  $scope.myClick = function(id) {
    $scope.filmDetails = [];
    $scope.actorDetails = [];
    console.log("my clickkkkkk");
    var formdata = new FormData();
    formdata.append("id", id);
    $http.post("http://localhost:3000/api/categories?id=" + id).then(
      data => {
        console.log(data);
        $scope.filmArray = data.data;
      },
      err => {
        console.log(err);
      }
    );
  };
  $scope.getfilmDetails = function(filmid, title) {
    console.log("filmDetailssda");
    $scope.title = title;
    $http.post("http://localhost:3000/api/film?id=" + filmid).then(
      data => {
        console.log(data);
        $scope.filmDetails = data.data;
      },
      err => {
        console.log(err);
      }
    );
    $http.post("http://localhost:3000/api/actors?id=" + filmid).then(
      data => {
        console.log(data);
        $scope.actorDetails = data.data;
      },
      err => {
        console.log(err);
      }
    );
  };
  console.log("workeddddddd");
});
