(function(){

  angular
    .module('app')
    .controller('ClubsController', [
      'clubsService',
      ClubsController
    ]);

  function ClubsController(clubsService) {
    var vm = this;

    vm.clubsData = [];
    vm.searchClub = '';

    clubsService
      .loadAll()
      .then(function(clubsData) {
        vm.clubsData = [].concat(clubsData);
      });
  }

})();
