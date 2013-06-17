/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('Body', function(Y, NAME) {

/**
 * The Body module.
 *
 * @module Body
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
        index: function(ac) {
        var model = ac.models.get('BodyModelUser');

          ac.composite.done();

           model.search(function(data){
                 Y.log("from controler")
                 Y.log(data);
                 Y.log("--------from controler-----------------")
               
            })
           
        }

    };

}, '0.0.1', {requires: ['mojito', 'mojito-composite-addon', 'mojito-params-addon', 'mojito-models-addon', 'BodyModelUser']});
