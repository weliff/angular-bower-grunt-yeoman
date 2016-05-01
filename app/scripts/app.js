
'use strict';

/**
 * @ngdoc overview
 * @name angularTreinamentoApp
 * @description
 * # angularTreinamentoApp
 *
 * Main module of the application.
 */
var app = angular
  .module('angularTreinamentoApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($routeProvider, $stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/login');

    $stateProvider
      .state('vocation', {
        url:'/vocation',
        templateUrl: 'views/main.html'
    })
      .state('vocation.dashboard', {
        url:'/dashboard',
        templateUrl: 'views/dashboard.html'
    })
      .state('login', {
        url:'/login',
        controller: 'LoginController', 
        templateUrl: 'views/login.html'
    })
      .state('vocation.avaliacoes', {
        url:'/avaliacoes',
        controller: 'AvaliacoesController', 
        templateUrl: 'views/avaliacoes.html'
    })
      .state('vocation.objetivos', {
        url:'/objetivos',
        controller: '', 
        templateUrl: 'views/objetivos.html'
    })
      .state('vocation.metas', {
        url:'/metas',
        controller: '', 
        templateUrl: 'views/metas.html'
    })
      .state('vocation.plano-de-acao', {
        url:'/plano-de-acao',
        controller: '', 
        templateUrl: 'views/plano-de-acao.html'
    });


    // $routeProvider
    //   .when('/', {
    //     templateUrl: 'views/main.html',
    //   })
    //   .when('/dashboard', {
    //     templateUrl: 'views/dashboard.html',
    //     controller: 'DashboardController',
    //     controllerAs: 'DashboardController'
    //   })
    //   .when('/clientes', {
    //     templateUrl: 'views/clientes.html',
    //     controller: 'DashboardController',
    //     controllerAs: 'DashboardController'
    //   })
    //   .otherwise({
    //     redirectTo: '/'
    //   });
  });
