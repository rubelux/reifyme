/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('Content', function(Y, NAME) {

    Y.namespace('mojito.controllers')[NAME] = {

        index: function(ac) {
        	/*var req = ac.http.getRequest(),
                passport = req.passport;

                Y.log(passport)*/
           
            ac.composite.done();
        }

    };

}, '0.0.1', {requires: ['mojito', 'mojito-composite-addon', 'mojito-http-addon']});
