/*
 * Copyright (c) 2012 Yahoo! Inc. All rights reserved.
 */
/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('ContRightBinderIndex', function(Y, NAME) {


    Y.namespace('mojito.binders')[NAME] = {

 
        init: function(mojitProxy) {

            this.mojitProxy = mojitProxy;
            var self = this;

            this.mojitProxy.listen('broadcast-link', function(payload) {

                Y.log('Intercepted broadcast-link event: ' + payload.data.url, 'info', NAME);

                var params = {
                    url: {
                        url: payload.data.url
                    }
                };

                mojitProxy.invoke('show', {params: params}, function(err, markup){

                    self.node.setContent(markup);

                })
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
         
        }

    };

}, '0.0.1', {requires: ['mojito-client']});
