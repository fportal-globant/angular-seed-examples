'use strict';

angular.module('Albums', ['ui.router', 'Albums.albumsList', 'Albums.songsList', 'Albums.songDetails'])
    .config(function ($urlRouterProvider, $stateProvider) {
        //redirect any invalid hash to /home
        $urlRouterProvider.otherwise('/albums');

        var albumsList = {
            name: 'albumsList',
            url: '/albums',
            views: {
                'main-view':{
                    controller: 'AlbumsListCtrl',
                    templateUrl: 'features/albumsList/views/albumsList.tpl.html'
                }
            },
            resolve: {
                albumsData: function(AlbumsListSrv){
                    return AlbumsListSrv.get();
                }
            }
        };

        var songsList = {
            name: 'songsList',
            parent: 'albumsList', //this controller will inherit form albumsList controller
            url: '/:album',
            views: {
                'album-list-view':{
                    controller: 'SongsListCtrl',
                    templateUrl: 'features/songsList/views/songsList.tpl.html'
                }
            }
        };

        var songDetails = {
            name: 'songDetails',
            parent: 'songsList',
            url: '/:song',
            views: {
                'song-details-view':{
                    controller: 'SongDetailsCtrl',
                    templateUrl: 'features/songDetails/views/songDetails.tpl.html'
                }
            }
        };
        
        $stateProvider
            .state(albumsList)
            .state(songsList)
            .state(songDetails);
    });