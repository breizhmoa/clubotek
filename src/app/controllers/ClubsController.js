(function(){

  angular
    .module('app')
    .controller('ClubsController', [
      'clubsService',
      'sportsService',
      'countriesService',
      ClubsController
    ]);

  function ClubsController(clubsService, sportsService, countriesService) {
    var vm = this;

    vm.searchClub = '';
    vm.sports = sportsService.loadAll();
    vm.countries = countriesService.loadAll();
    
    vm.clubsData = [];
    clubsService
      .loadAll()
      .then(function(clubsData) {
        vm.clubsData = [].concat(clubsData);
      });
  }

})();
