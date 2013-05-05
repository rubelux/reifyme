/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('ContentBinderIndex', function(Y, NAME) {

/**
 * The ContentBinderIndex module.
 *
 * @module ContentBinderIndex
 */

    /**
     * Constructor for the ContentBinderIndex class.
     *
     * @class ContentBinderIndex
     * @constructor
     */
    Y.namespace('mojito.binders')[NAME] = {

        /**
         * Binder initialization method, invoked after all binders on the page
         * have been constructed.
         */
        init: function(mojitProxy) {
           var mp = this.mp = this.mojitProxy = mojitProxy;
          

            this.mp.listen('fire-links', function(links){

                Y.log('fire-links event is cupture')
                var c = mp.getChildren()
                 ,  receiverID = c["contRight"].viewId;

                Y.log('intercepted fire-link event: ' + links.data.url, 'info', NAME);
                Y.log('receiverID: ' + receiverID);

                mojitProxy.broadcast('broadcast-link', {url: links.data.url},{ target: {viewId:receiverID }});  
            });
        },

        /**
         * The binder method, invoked to allow the mojit to attach DOM event
         * handlers.
         *
         * @param node {Node} The DOM node to which this mojit is attached.
         */
        bind: function(node) {
            var me = this;
            this.node = node;
            /**
             * Example code for the bind method:
             *
             * node.all('dt').on('mouseenter', function(evt) {
             *   var dd = '#dd_' + evt.target.get('text');
             *   me.node.one(dd).addClass('sel');
             *
             * });
             * node.all('dt').on('mouseleave', function(evt) {
             *   
             *   var dd = '#dd_' + evt.target.get('text');
             *   me.node.one(dd).removeClass('sel');
             *
             * });
             */
        }

    };

}, '0.0.1', {requires: ['event-mouseenter', 'mojito-client']});
