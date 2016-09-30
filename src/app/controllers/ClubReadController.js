(function(){

  angular
    .module('app')
    .controller('ClubReadController', [
      '$stateParams',
      '$sce',
      'clubsService',
      'sportsService',
      'countriesService',
      ClubReadController
    ]);

  function ClubReadController($stateParams, $sce, clubsService, sportsService, countriesService) {
    var vm = this;

    vm.searchClub = '';
    vm.searchSport = '';
    vm.sports = sportsService.loadAll();
    vm.countries = countriesService.loadAll();
    vm.club = clubsService.get($stateParams.id);

    vm.trustSrc = function(src) {
        return $sce.trustAsResourceUrl(src);
    }

    vm.getCompetitionRankFriendlyName = function(type, rank) {
      if (type === 'cup') {
        switch (rank) {
          case 1: return 'vainqueur';
          case 2: return 'finaliste';
          case 3: case 4: return '1/2 finaliste';
          case 5: case 6: case 7: case 8: return '1/2 finaliste';
        }
      }
      else if (type === 'championship') {
        switch (rank) {
          case 1: return 'champion';
          case 2: return '2nd';
          default: return '' + rank + 'eme';
        }
      }

      return '' + rank;
    }
  }

})();
