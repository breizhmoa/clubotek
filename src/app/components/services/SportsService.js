(function(){
  'use strict';

  angular.module('app')
    .service('sportsService', [
      sportsService
    ]);

  function sportsService(){
    var allSports = [
      {id: 1, name: 'football', icon: 'assets/images/sports/football.svg'},
      {id: 2, name: 'basket', icon: 'assets/images/sports/basketball.svg'},
      {id: 3, name: 'rugby', icon: 'assets/images/sports/rugby.svg'},
      {id: 4, name: 'handball', icon: 'assets/images/sports/handball.svg'},
      {id: 5, name: 'volley', icon: 'assets/images/sports/volleyball.svg'},
      {id: 6, name: 'hockey', icon: 'assets/images/sports/hockey.svg'},
      {id: 7, name: 'baseball', icon: 'assets/images/sports/baseball.svg'},
      {id: 8, name: 'football américain', icon: 'assets/images/sports/american-football.svg'}
    ];

    return {
      loadAll : function() {
        return allSports.map(function(sport) {
          return {
            value: sport.name.toLowerCase(),
            id: sport.id,
            display: sport.name,
            icon: sport.icon
          };
        });
      }
    };
  }

})();
