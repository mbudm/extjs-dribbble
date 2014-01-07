Ext.define('dgl.model.Shot', {
    extend: 'Ext.data.Model',
    requires:['dgl.proxy.RestViaProxy'],
    fields: [ 
      "id",
      "title",
      "url",
      "short_url",
      "image_url",
      "image_teaser_url",
      "width",
      "height",
      "views_count",
      "likes_count",
      "comments_count",
      "rebounds_count",
      "rebound_source_id",
      "created_at"
      ],
      associations: [{ type: 'hasOne', model: 'Player' }]
});