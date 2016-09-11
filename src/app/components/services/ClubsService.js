(function(){
  'use strict';

  angular.module('app')
    .service('clubsService', [
        '$q',
      clubsService
    ]);

  function clubsService($q){
    var allClubs = [
      { sport: 'football', name: 'Stade Rennais', city: 'Rennes', country:'FR', officialName: 'Stade Rennais Football Club', color1: 'red', color2: 'black', logo: 'http://', shirt: 'http://', shirtType: 'mono', addressOffice: '', foundationYear: '1901', stadium: {name: 'Roazhon Park', capacity: 29000, address: '111 route de Lorient 35200 Rennes'}, curLeague: 'ligue 1', palmares: {} },
      { sport: 'football', name: 'FC Nantes', city: 'Nantes', country:'FR', officialName: 'Football Club Nantes', color1: 'gold', color2: 'green', logo: 'http://', shirt: 'http://', shirtType: 'mono', addressOffice: '', foundationYear: '1943', stadium: {name: 'La Beaujoire'}, curLeague: 'ligue 1', palmares: {} },
      { sport: 'basket', name: 'New York Knicks', city: 'New York', country:'US', color1: 'orange', color2: 'blue', logo: 'http://', shirt: 'http://', shirtType: 'mono', addressOffice: '', foundationYear: '', stadium: {name: 'Madison Square Garden', capacity: 25000}, curLeague: 'nba', palmares: {} }
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
