YUI.add('addon-ac-mongoDBc', function(Y, NAME) {

  var mongodb = require('mongodb');

  function MongoDBcAcAddon(command, adapter, ac) {
    // The "command" is the Mojito internal details
    // for the dispatch of the mojit instance.
    // The "adapter" is the output adapter, containing
    // the "done()", "error()", etc, methods.
    // The "ac" is the ActionContext object to which
    // this addon is about to be attached.
  }
  MongoDBcAcAddon.prototype = {
    // The "namespace" is where in the ActionContext
    // the user can find this addon. The namespace
    // must be the same as the first part of the addon file.
    // Thus, this addon file must be named 'cheese'.{affinity}.js'
    namespace: 'mongoDBc',
    loadData: function() {

      var server = new mongodb.Server("127.0.0.1", 27017, {});

      var dbTest = new mongodb.Db('unTestDB', server, {});

      var retuValue = function(docs){
        
        return docs;
      }

      

      dbTest.open(function (error, client) {
          if (error) throw error;

           var collection = new mongodb.Collection(client, 'personas');
  
           var resultP =  collection.find({'nombre': 'pepe'}).toArray(function(err, docs) {
 
            //imprimimos en la consola el resultado
            
            retuValue(docs)
            });
          
      });

      


     
   //    Y.log(server);
      
    }
  }; //prototype
  // If this addon depends on another, that can
  // be specified here. Circular dependencies are not
  // supported or automatically detected,
  // so please be careful.
  MongoDBcAcAddon.dependsOn = ['http'];
  Y.mojito.addons.ac.mongoDBc = MongoDBcAcAddon;
}, '0.0.1', {requires: ['mojito']});