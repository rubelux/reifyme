/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('ContRight', function(Y, NAME) {

/**
 * The ContRight module.
 *
 * @module ContRight
 */

    /**
     * Constructor for the Controller class.
     *
     * @class Controller
     * @constructor
     */
    Y.namespace('mojito.controllers')[NAME] = {

       
        index: function(ac) {
            ac.done({title: 'this is my title'});
        },
        show:function(ac){
            var url = ac.params.getFromMerged('url') || 'http://www.rubelux.net' ; 
            ac.done({title: 'this is my try' + url , url: url});

            

        }

    };

}, '0.0.1', {requires: ['mojito-params-addon']});
