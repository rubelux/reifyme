/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('login', function(Y, NAME) {

/**
 * The login module.
 *
 * @module login
 */

    /**
     * Constructor for the Controller class.
     *
     * @class Controller
     * @constructor
     */
    Y.namespace('mojito.controllers')[NAME] = {

        /**
         * Method corresponding to the 'index' action.
         *
         * @param ac {Object} The ActionContext that provides access
         *        to the Mojito API.
         */
        "index": function(ac) {
             var req = ac.http.getRequest()
             ,  userInfo = req.user;

             if(userInfo){
                 var username =userInfo.username;    
            }
            
          ac.done({
                    username: username
            });
            
        }
        

    };

}, '0.0.1', {requires: ['mojito', 'passport', 'mojito-http-addon']});
