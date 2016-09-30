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
      { id: 1, sport: 1, name: 'Stade Rennais', city: 'Rennes', country:'FR', officialName: 'Stade Rennais Football Club', color1: 'red', color2: 'black', logo: 'https://upload.wikimedia.org/wikipedia/fr/e/e9/Logo_Stade_Rennais_FC.svg'/*'http://medias.lequipe.fr/logo-football/14/300?20160919164501'*/, shirt: 'http://medias.lequipe.fr/maillot-football/14/1/120?20160919164501', shirtType: 'mono', addressOffice: '', foundationYear: '1901', stadium: { name: 'Roazhon Park', capacity: 29778, address: '111, route de Lorient 35000 Rennes', photo: 'http://medias.lequipe.fr/img-stade:football-jpg/stade/id:14/0-350-0-76/?20160919164501' }, current: { year: '2016-17', league: 'ligue 1' }, palmares: [ {competition: 'Coupe de France', type: 'cup', record: [{rank: 1, years: [1965, 1971]}, {rank: 2, years: [2009, 2014]}]}, {competition: 'Ligue 2', type: 'championship', record: [{rank: 1, years: [1956, 1983]}]} ], surname: "Les 'Rouge et Noir'", website:"http://www.staderennais.com" },
      { id: 2, sport: 1, name: 'FC Nantes', city: 'Nantes', country:'FR', officialName: 'Football Club Nantes', color1: 'gold', color2: 'green', logo: 'http://', shirt: 'http://', shirtType: 'mono', addressOffice: '', foundationYear: '1943', stadium: {name: 'La Beaujoire'}, curLeague: 'ligue 1', palmares: {} },
      { id: 3, sport: 2, name: 'New York Knicks', city: 'New York', country:'US', color1: 'orange', color2: 'blue', addressOffice: '', stadium: {name: 'Madison Square Garden', capacity: 25000}, curLeague: 'nba', palmares: {} }
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
