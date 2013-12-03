describe('Navigation', function () {
    'use strict';

    beforeEach(function() {
        browser().navigateTo('/');
    });

    it('should redirect to home if hash is invalid', function(){
        browser().navigateTo('#/non-existent-hash');
        expect( browser().location().url() ).toBe('/albums');
    });

});