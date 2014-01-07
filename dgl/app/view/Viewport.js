Ext.define('dgl.view.Viewport' ,{
    extend: 'Ext.container.Container',
    alias: 'widget.dglviewport',
    requires:['dgl.view.Detail'],
    layout: 'auto',
    per_page:24,
    pageCount:1, //investigate store paging
    storeLoading:false, //the store.isLoading method doesn't kick in quick enough, the scroll event causes a double load
   
    initComponent: function() {
        this.callParent(arguments);
    },
    
    renderGallery:function(){

		Ext.fly(window).on({
			scroll:Ext.Function.alias(this,'onWindowScroll'),
			scope:this
		})
		
     	this.store = Ext.getStore('Shots');
     	this.store.getProxy().setExtraParam('per_page',this.per_page)
     	
		this.store.on({
			load:Ext.Function.alias(this,'onStoreLoad'),
			scope:this
		})
		
		this.store.load()
		this.storeLoading = true;
    },
    onStoreLoad:function(store, records, successful, eOpts){
    	var rData = {
			shots:records
    	}
    	var gal = this.down('gallery');
    	if(gal){
    		gal.update(rData);
    	}else{
    		this.add({
				xtype:'gallery',
				data:rData
			})
    	}
    	this.storeLoading = false;
    	
    	//ensure the gallery isn't less than the viewport height, if so force load another page
    	//debugger;
    	if(document.body.offsetHeight <= window.innerHeight){
				this.loadNextPage()
    	}
    },
    onWindowScroll:function(e, t, eOpts ){
    	console.log('onViewportScroll',e)
        //get another page worth of shots when we're near the last row
        if(!this.storeLoading){
			 if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - window.innerHeight) {
				this.loadNextPage()
				
			}
		}
    },
    loadNextPage:function(){
    	this.pageCount++
		this.storeLoading = true;
		this.store.load({
			params: {
				page: this.pageCount
			}
		})
    },
    renderGalleryDetail:function(galid){
    	//destroy other deatils
    	
    	//create new deatil
    	//var rec = this.store.findRecord('id',galid)
    	//Ext.create('dgl.view.Detail',{renderData:rec}).show();
    }
});