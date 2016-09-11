(function(){
  'use strict';

  angular.module('app')
    .service('sportsService', [
      sportsService
    ]);

  function sportsService(){
    var allSports = [
      {name: 'football', logo: ''},
      {name: 'basket', logo: ''},
      {name: 'rugby', logo: ''},
      {name: 'handball', logo: ''},
      {name: 'volley', logo: ''},
      {name: 'hockey', logo: ''},
      {name: 'baseball', logo: ''},
      {name: 'football américain', logo: ''}
    ];

    return {
      loadAll : function() {
        return allSports.map(function(sport) {
          return {
            value: sport.name.toLowerCase(),
            display: sport.name,
            code: sport.code
          };
        });
      }
    };
  }

})();
