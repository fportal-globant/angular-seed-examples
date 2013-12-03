describe('Albums flow', function(){
    'use strict';

    beforeEach(function() {
        // browser().navigateTo('/albums');
    });

    describe('User enters the album page, clicks on a album and see the songs list for such an album', function(){
        it('should allow the user to finish the flow', function(){
            browser().navigateTo('/');
            locationShouldBe('albums');

            user.clicksTheFirstAlbum();
            locationShouldBe('albums/please-please-me');
        });
    });

    describe('User enters the album page, clicks on a album and see the songs list for such an album and clicks on a song to see the song details', function(){
        it('should allow the user to finish the flow', function(){
            browser().navigateTo('/');
            locationShouldBe('albums');

            user.clicksTheFirstAlbum();
            locationShouldBe('albums/please-please-me');

            user.clicksTheFirstSong();
            locationShouldBe('albums/please-please-me/i-saw-her-standing-there');
        });
    });
});