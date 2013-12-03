'use strict';

angular.module('Albums.songDetails').controller('SongDetailsCtrl', function ($scope, $state, $location, SongDetailsSrv) {
    $scope.songId = $state.params.album;

    SongDetailsSrv.get().then(function(data){
        $scope.song = data;
    });

    $scope.hideDetails = function(){
        var songsListUrl = $location.path().split('/').slice(0,3).join('/');
        $location.path( songsListUrl );
    };
});