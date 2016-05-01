'use strict';

app.directive('navegacao', [function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {
		// 	$scope.collapseVar = @;
		// }, // {} = isolate, true = child, false/undefined = no change
		controller: function($scope, $element, $attrs, $transclude, $rootScope) {
			$scope.collapseVar = '';	
			$scope.menu = [
				{'label':'Dashboard', 'ref':'vocation.dashboard'},
				{'label':'Avalições', 'ref':'vocation.avaliacoes'},
				{'label':'Objetivos', 'ref':'vocation.objetivos'},
				{'label':'Metas', 'ref':'vocation.metas'},
				{'label':'Plano de Ação', 'ref':'vocation.plano-de-acao'},
			];

			$scope.check = function(label){
	          if(label!=$scope.collapseVar)
	            $scope.collapseVar = label;
        	};

		},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		templateUrl: '../partials/navegacao.html',
		replace: true
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
	
	};
}]);