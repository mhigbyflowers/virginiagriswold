(function() {
  'use strict';

  angular
    .module('va')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'ctrl'
      })
      .state('equal parts', {
        url: '/equal-parts',
        templateUrl: 'app/project/project.html',
        controller: 'ProjectController',
        controllerAs: 'ctrl'
      })
      .state('osage', {
        url: '/osage',
        templateUrl: 'app/project/project.html',
        controller: 'ProjectController',
        controllerAs: 'ctrl'
      })
      .state('ripe/raw', {
        url: '/ripe-raw',
        templateUrl: 'app/project/project.html',
        controller: 'ProjectController',
        controllerAs: 'ctrl'
      })
      .state('mirror object', {
        url: '/mirror-object',
        templateUrl: 'app/project/project.html',
        controller: 'ProjectController',
        controllerAs: 'ctrl'
      })
      .state('near earth objects', {
        url: '/near-earth-objects',
        templateUrl: 'app/project/project.html',
        controller: 'ProjectController',
        controllerAs: 'ctrl'
      })
      .state('levarche', {
        url: '/levarche',
        templateUrl: 'app/project/project.html',
        controller: 'ProjectController',
        controllerAs: 'ctrl'
      })
      .state('blue', {
        url: '/table-two',
        templateUrl: 'app/project/project.html',
        controller: 'ProjectController',
        controllerAs: 'ctrl'
      })
      .state('red)', {
        url: '/table-one',
        templateUrl: 'app/project/project.html',
        controller: 'ProjectController',
        controllerAs: 'ctrl'
      })
      .state('outside', {
        url: '/outside',
        templateUrl: 'app/project/project.html',
        controller: 'ProjectController',
        controllerAs: 'ctrl'
      })
      .state('float pile', {
        url: '/float-pile',
        templateUrl: 'app/project/project.html',
        controller: 'ProjectController',
        controllerAs: 'ctrl'
      })
      .state('primary ornament', {
        url: '/primary-ornament',
        templateUrl: 'app/project/project.html',
        controller: 'ProjectController',
        controllerAs: 'ctrl'
      })
      .state('alienum', {
        url: '/alienum',
        templateUrl: 'app/project/project.html',
        controller: 'ProjectController',
        controllerAs: 'ctrl'
      })
      .state('through an eye', {
        url: '/through-an-eye',
        templateUrl: 'app/project/project.html',
        controller: 'ProjectController',
        controllerAs: 'ctrl'
      })
      .state('objects', {
        url: '/objects',
        templateUrl: 'app/main/main.html',
        controller: 'ProjectController',
        controllerAs: 'ctrl'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
