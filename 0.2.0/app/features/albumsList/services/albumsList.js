'use strict';

angular.module('Albums.albumsList').factory('AlbumsListSrv', function ($http, $q) {

    var get = function(){
        var deferred = $q.defer();
        $http({
            method:'GET',
            url: 'http://127.0.0.1:8080/service/albums'
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