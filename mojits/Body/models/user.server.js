/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('BodyModelUser', function(Y, NAME) {

var mongodb = require('mongodb');
/**
 * The BodyModelFoo module.
 *
 * @module Body
 */

    /**
     * Constructor for the BodyModelFoo class.
     *
     * @class BodyModelFoo
     * @constructor
     */
    Y.namespace('mojito.models')[NAME] = {

        init: function(config) {
            this.config = config;
        },

        /**
         * Method that will be invoked by the mojit controller to obtain data.
         *
         * @param callback {function(err,data)} The callback function to call when the
         *        data has been retrieved.
         */
        search: function (callback) {
          

            var server = new mongodb.Server("127.0.0.1", 27017, {});
            var dbTest = new mongodb.Db('unTestDB', server, {});

           // Y.log(server)

            dbTest.open(function (error, client) {
                if (error) throw error;

                var collection = new mongodb.Collection(client, 'personas');
  
                 var resultP =  collection.find({'nombre': 'pepe'}).toArray(function(err, docs) {
                    if (error) throw error;

                    //imprimimos en la consola el resultado
            
                    //retuValue(docs)
                    callback ({some:docs});
                });
                
                
            }) 

           callback({some:'nothing'});

        }//search  



    };

}, '0.0.1', {requires: ['mojito']});
