/**
 * Created by riccardo on 16/06/15.
 */
(function(){
    'use strict';

    var app = angular.module("morraCinese", []);

    app.controller('MainController', ['$scope', '$location', '$http',
        function($scope, $location, $http) {

            $scope.tu = 0;
            $scope.computer = 0;
            $scope.master = {firstName: "John", lastName: "Doe"};
            $scope.user = angular.copy($scope.master);

            $scope.morra = function(id){
                $http.post('/dogame', {
                    idmossa :id
                })
                .success(function(data) {
                    alert("l'avversario ha fatto "+data.mossa+". Tu hai "+data.result+"!");
                        if(data.result == "perso"){
                            $scope.computer++;
                        }

                        if(data.result == "vinto"){
                            $scope.tu++;
                        }


                })
                .error(function(data) {
                    console.log('Error: ' + data);
                });
            };


        }
    ]);


})();