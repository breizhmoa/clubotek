(function(){

  angular
    .module('app')
    .controller('ClubReadController', [
      '$stateParams',
      'clubsService',
      'sportsService',
      'countriesService',
      ClubReadController
    ]);

  function ClubReadController($stateParams, clubsService, sportsService, countriesService) {
    var vm = this;

    vm.searchClub = '';
    vm.searchSport = '';
    vm.sports = sportsService.loadAll();
    vm.countries = countriesService.loadAll();
    
    vm.club = clubsService.get($stateParams.id);
  }

})();
