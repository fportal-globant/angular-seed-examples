'use strict';

angular.module('Albums.songDetails').factory('SongDetailsSrv', function ($q, $http) {

    var get = function(){
        var deferred = $q.defer();
        $http({
            method:'GET',
            url: 'http://127.0.0.1:8080/service/songs'
        })
        .success(function(data){
            deferred.resolve(data);
        })
        .error(function(error){
            deferred.reject(error);
        });

        return deferred.promise;
    };

    return {
        get: get
    };
});