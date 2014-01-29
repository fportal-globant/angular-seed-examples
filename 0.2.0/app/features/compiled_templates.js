angular.module('app').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('features/albumsList/views/albumsList.tpl.html',
    "<!-- Template: app//features/albumsList/views/albumsList.tpl.html -->\n" +
    "<h1>{{albums.band}}</h1>\n" +
    "<ul class=\"js-albums-list\">\n" +
    "    <li ng-repeat=\"album in albums.albums\">\n" +
    "        <a href=\"#/albums/{{album.id}}\">{{album.title}}</a>\n" +
    "    </li>\n" +
    "</ul>\n" +
    "<div ui-view=\"album-list-view\"></div>\n"
  );


  $templateCache.put('features/songDetails/views/songDetails.tpl.html',
    "<!-- Template: app//features/songDetails/views/songDetails.tpl.html -->\n" +
    "<div class=\"js-song-details song-details\">\n" +
    "    <hr>\n" +
    "    <a ng-click=\"hideDetails();\">Hide details</a>\n" +
    "    <h1>Song detials</h1>\n" +
    "    <h2>{{song.name}} ({{song.year}})</h2>\n" +
    "    <h4>{{song.band}}</h4>\n" +
    "    <p>{{song.shortDescription}}</p>\n" +
    "</div>"
  );


  $templateCache.put('features/songsList/views/songsList.tpl.html',
    "<!-- Template: app//features/songsList/views/songsList.tpl.html -->\n" +
    "<div class=\"songs-list\" ng-repeat=\"album in albums.albums | filter:albumFilter\">\n" +
    "    \n" +
    "    <ul class=\"js-songs-list\">\n" +
    "        <li ng-repeat=\"song in album.songs\">\n" +
    "            <div ng-show=\"song.moreinfo\">\n" +
    "                <a href=\"#/albums/{{album.id}}/{{song.id}}\">\n" +
    "                    <span>{{song.title}}</span>\n" +
    "                    <span ng-repeat=\"name in song.leadVocals\">{{name}}</span>\n" +
    "                    <span>{{song.length}}</span>\n" +
    "                </a>\n" +
    "            </div>\n" +
    "            <div ng-hide=\"song.moreinfo\">\n" +
    "                <span>{{song.title}}</span>\n" +
    "                <span ng-repeat=\"name in song.leadVocals\">{{name}}</span>\n" +
    "                <span>{{song.length}}</span>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "\n" +
    "\n" +
    "    <div ui-view=\"song-details-view\"></div>\n" +
    "\n" +
    "</div>"
  );

}]);
