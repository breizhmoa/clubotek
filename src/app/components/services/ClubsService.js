(function(){
  'use strict';

  angular.module('app')
    .service('clubsService', [
        '$q',
        '$filter',
      clubsService
    ]);

  function clubsService($q, $filter){
    var allClubs = [
      { id: 1, sport: 1, name: 'Stade Rennais', city: 'Rennes', country:'FR', officialName: 'Stade Rennais Football Club', color1: 'red', color2: 'black', logo: 'https://upload.wikimedia.org/wikipedia/fr/e/e9/Logo_Stade_Rennais_FC.svg', shirt: 'http://', shirtType: 'mono', addressOffice: '', foundationYear: '1901', stadium: {name: 'Roazhon Park', capacity: 29000, address: '111 route de Lorient 35200 Rennes'}, curLeague: 'ligue 1', palmares: {} },
      { id: 2, sport: 1, name: 'FC Nantes', city: 'Nantes', country:'FR', officialName: 'Football Club Nantes', color1: 'gold', color2: 'green', logo: 'http://', shirt: 'http://', shirtType: 'mono', addressOffice: '', foundationYear: '1943', stadium: {name: 'La Beaujoire'}, curLeague: 'ligue 1', palmares: {} },
      { id: 3, sport: 2, name: 'New York Knicks', city: 'New York', country:'US', color1: 'orange', color2: 'blue', logo: 'http://', shirt: 'http://', shirtType: 'mono', addressOffice: '', foundationYear: '', stadium: {name: 'Madison Square Garden', capacity: 25000}, curLeague: 'nba', palmares: {} }
    ];

    return {
      loadAll : function() {
        return $q.when(allClubs);
      },

      get : function(id) {
        return $filter("filter")(allClubs, {id: id})[0];
      }
    };
  }

})();
