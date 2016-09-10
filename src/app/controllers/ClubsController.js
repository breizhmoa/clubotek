(function(){

  angular
    .module('app')
    .controller('ClubsController', [
      'clubsService',
      ClubsController
    ]);

  function ClubsController(clubsService) {
    var vm = this;

    vm.searchClub = 'rennes';
    vm.clubsData = [];

    clubsService
      .loadAll()
      .then(function(clubsData) {
        vm.clubsData = [].concat(clubsData);
      });
  }

})();
