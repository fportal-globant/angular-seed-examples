'use strict';

angular.module('Albums.albumsList').controller('AlbumsListCtrl', function ($scope, albumsData, $templateCache) {
    $scope.albums = albumsData;
    console.log("template Cache");
    console.log($templateCache);
    console.log($templateCache.get('features/albumsList/views/albumsList.tpl.html'));
});