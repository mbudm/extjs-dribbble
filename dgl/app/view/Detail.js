Ext.define('dgl.view.Detail' ,{
    extend: 'Ext.Component',
    alias: 'widget.detail',
    childEls:['fig', 'image','caption', 'closeEl'],
    floating:true,
	renderTpl: [
		'<figure id="{id}-fig" class="detail" >',
				'<img id="{id}-image" alt="{[ this.getField(\'title\',values) ]}" src="{[ this.getField(\'image_url\',values) ]}" width="400" height="300" />',
				'<figcaption id="{id}-caption">',
					'<h2>{[ this.getField(\'title\',values) ]}<h2>',
					
				'</figcaption>',
				'<button id="{id}-closeEl">Close</button>',
		'</figure>',
		 {
			getField: function(fieldName, values) {
				return values.get(fieldName);
			}
		}
    ],
    initComponent: function() {
        this.callParent(arguments);
    }
});