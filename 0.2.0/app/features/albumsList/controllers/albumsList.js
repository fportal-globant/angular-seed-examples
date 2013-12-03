'use strict';

angular.module('Albums.albumsList').controller('AlbumsListCtrl', function ($scope, albumsData) {
    $scope.albums = albumsData;
});