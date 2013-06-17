/*
 * Copyright (c) 2011-2013, Yahoo! Inc.  All rights reserved.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE file for terms.
 */


/*jslint anon:true, sloppy:true, nomen:true*/

process.chdir(__dirname);

/*
 * Create the MojitoServer instance we'll interact with. Options can be passed
 * using an object with the desired key/value pairs.
 */
var Mojito = require('mojito')
,  app = Mojito.createServer();




/*MongoClient.connect("mongodb://localhost:8666/exampleDb", function(err, db) {
  if(!err) {
    console.log("We are connected");
  }
}); */

// ---------------------------------------------------------------------------
// Different hosting environments require different approaches to starting the
// server. Adjust below to match the requirements of your hosting environment.
// ---------------------------------------------------------------------------


module.exports = app.listen(process.env.VCAP_APP_PORT || 3000);

