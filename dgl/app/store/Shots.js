Ext.define('dgl.store.Shots',{
	extend:'Ext.data.Store', 
    model: 'dgl.model.Shot',
    requires:['dgl.proxy.RestViaProxy'],
    proxy: {
        type: 'restproxy',
        url : 'http://api.dribbble.com/shots/popular',
        reader:{
        	root:'shots'
        }
    }
});