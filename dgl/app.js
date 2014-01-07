Ext.application({
    name: 'dgl',
    controllers: [
        'Main'
    ],
    launch: function() {
    
    	Ext.XTemplate.prototype.applySubtemplate = function(name, obj) {
    	
			return Ext.XTemplate.subs[name].apply(obj);
		};
		
		Ext.XTemplate.registerSubtemplate = function(name, tpl) {
			Ext.XTemplate.subs = Ext.XTemplate.subs || {};
			Ext.XTemplate.subs[name] = tpl;
		};

        Ext.create('dgl.view.Viewport',{}).render(Ext.getBody());
    }
});