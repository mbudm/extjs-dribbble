Ext.define('dgl.controller.Main', {
    extend: 'Ext.app.Controller',
    stores:['Shots'],
    models: ['Player','Shot'],
	views: [
		'Viewport',
        'Gallery',
        'Detail'
    ],
    refs: [{
         ref: 'viewport',
         selector: 'dglviewport'
    }],
    init: function() {
        this.control({
            'dglviewport': {
                boxready: this.onViewportBoxReady
            },
            'gallery':{
            	detailrequest: this.onGalleryDetailRequest
            }
    	});
    },
    onViewportBoxReady: function() {
        this.getViewport().renderGallery()
    },
    onGalleryDetailRequest: function(galid) {
    	console.log('onGalleryDetailRequest:'+galid);
        this.getViewport().renderGalleryDetail(galid)
    }
});