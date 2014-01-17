'use strict';

angular.module('Albums.songsList').controller('SongsListCtrl', function ($scope, $state) {
    $scope.albumFilter = {id: $state.params.album};

    
});