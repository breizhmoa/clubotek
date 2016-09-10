(function(){
  'use strict';

  angular.module('app')
    .service('clubsService', [
        '$q',
      clubsService
    ]);

  function clubsService($q){
    var allClubs = [
      {name: 'Stade Rennais', city: 'Rennes', country:'France', officialName: 'Stade Rennais football Club', color1: 'red', color2: 'black', logo: 'http://', shirt: 'http://', sport: 'football' }
    ];

    return {
      loadAll : function() {
        return $q.when(allClubs);
        /*return allClubs.map(function(club) {
          return {
            value: club.name.toLowerCase(),
            display: club.name,
            code: club.code
          };
        });*/
      }
    };
  }

})();
