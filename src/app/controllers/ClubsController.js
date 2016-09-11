(function(){

  angular
    .module('app')
    .controller('ClubsController', [
      'clubsService',
      'countriesService',
      ClubsController
    ]);

  function ClubsController(clubsService, countriesService) {
    var vm = this;

    vm.searchClub = ''; //'rennes';
    vm.countries = countriesService.loadAll();
    
    vm.clubsData = [];
    clubsService
      .loadAll()
      .then(function(clubsData) {
        vm.clubsData = [].concat(clubsData);
      });
  }

})();
