Ext.define('dgl.proxy.RestViaProxy', {
    extend: 'Ext.data.proxy.Rest',
    alias: ['proxy.restproxy'],
    proxyurl: 'proxy.php',
    buildUrl: function(request) {
        var me        = this,
            url       = me.getUrl(request)

		request.url = Ext.urlAppend(me.proxyurl, Ext.Object.toQueryString({url:url}));
		
        return me.callParent(arguments);
    },
});