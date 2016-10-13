(function(){
  'use strict';

  angular.module('app', [ 'ngMaterial', 'uiGmapgoogle-maps' ])
    .config(function(uiGmapGoogleMapApiProvider) {
      uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyAtAkxUrxW1Gjn5M5Fo3D3uR7t5xTH8IJk',
        v: '3.exp', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization,places'
      });
  });

})();
