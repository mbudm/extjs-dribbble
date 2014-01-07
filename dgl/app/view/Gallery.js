Ext.define('dgl.view.Gallery' ,{
    extend: 'Ext.Component',
    alias: 'widget.gallery',
	tplWriteMode:'append',
	tpl: [
		'<tpl for="shots">',
			'{[ this.applySubtemplate("galleryFigure", values ) ]}',
		'</tpl>',
    ],
    initComponent: function() {
        Ext.XTemplate.registerSubtemplate(
			'galleryFigure',
			new Ext.XTemplate(
				'<figure data-galid="{[ this.getField(\'id\',values) ]}">',
				'<img alt="{[ this.getField(\'title\',values) ]}" src="{[ this.getField(\'image_teaser_url\',values) ]}" width="200" height="150" />',
				'<figcaption>{[ this.getField(\'title\',values) ]}</figcaption>',
				'</figure>',
				 {
					getField: function(fieldName, values) {
						return values.get(fieldName);
					}
				}
			)
		);
        this.callParent(arguments);
    },
    afterRender:function(){
    	this.getEl().on({
			'click':Ext.Function.alias(this,'onFigureClicked'),
			scope:this,
			options:{
				// filter the target element to be a descendant with the class 'clickable'
				delegate: 'figure'
			}
		})

        this.callParent(arguments);
    },
    onFigureClicked:function(e,t){
    	var fig = Ext.fly(t).up('figure')
    	this.fireEvent('detailrequest',fig.dom.dataset.galid)
    }
});