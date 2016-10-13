(function(){

  angular
    .module('app')
    .controller('ClubReadController', [
      '$stateParams',
      '$sce',
      'clubsService',
      'sportsService',
      'countriesService',
      'uiGmapGoogleMapApi',
      ClubReadController
    ]);

  function ClubReadController($stateParams, $sce, clubsService, sportsService, countriesService, uiGmapGoogleMapApi) {
    var vm = this;

    vm.searchClub = '';
    vm.searchSport = '';
    vm.sports = sportsService.loadAll();
    vm.countries = countriesService.loadAll();
    vm.club = clubsService.get($stateParams.id);
    vm.zoom = 14;
    vm.mapsopt = {};

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

    uiGmapGoogleMapApi.then(function(maps) {
//console.log('uiGmapGoogleMapApi:' + JSON.stringify(maps));
      vm.mapsopt = {
        scrollwheel: false,
        mapTypeId: google.maps.MapTypeId.SATELLITE
      };
      vm.marker = {coords: Object.create(vm.club.stadium.center)};
      vm.markeropt = {
        title: vm.club.stadium.name + ' (' + vm.club.stadium.capacity + ' pl.)'
        /*animation: 1*/
      };
    });
  }

})();
