(function(){
  'use strict';

  angular.module('app')
    .service('clubsService', [
        '$q',
      clubsService
    ]);

  function clubsService($q){
    var allClubs = [
      { sport: 'football', name: 'Stade Rennais', city: 'Rennes', country:'France', officialName: 'Stade Rennais football Club', color1: 'red', color2: 'black', logo: 'http://', shirt: 'http://', shirtType: 'mono', addressOffice: '', foundationYear: '1901', stadium: {name: 'Roazhon Park', capacity: 29000, address: '111 route de Lorient 35200 Rennes'}, palmares: {} }
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
