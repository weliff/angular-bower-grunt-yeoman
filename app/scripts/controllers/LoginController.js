/*global app */
'use strict';

app.controller('LoginController', ['$scope', '$location', '$state', function($scope, $location, $state){
	$scope.Padrao = {};
	$scope.Padrao.login = 'admin';
	$scope.Padrao.senha = 'admin';

	$scope.falhou = false;
	$scope.doLogin = function(login) {
		if (login.usuario === $scope.Padrao.login && login.senha === $scope.Padrao.senha) {
			$scope.falhou = false;
			$state.go('vocation.dashboard');
		} else {
			$scope.falhou = true;
		}
	};

}]);