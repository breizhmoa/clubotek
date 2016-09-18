(function(){
  'use strict';

  angular.module('app')
          .service('navService', [
          '$q',
          navService
  ]);

  /* icon references come from https://design.google.com/icons */
  function navService($q){
    var menuItems = [
/*      {
        name: 'Dashboard',
        icon: 'dashboard',
        sref: '.dashboard'
      },
      {
        name: 'Profile',
        icon: 'person',
        sref: '.profile'
      },
      {
        name: 'Table',
        icon: 'view_module',
        sref: '.table'
      },*/
      {
        name: 'Map',
        icon: 'map',
        sref: '.map'
      },
      {
        name: 'Clubs',
        icon: 'local_library',
        sref: '.clubs'
      }
    ];

    return {
      loadAllItems : function() {
        return $q.when(menuItems);
      }
    };
  }

})();
