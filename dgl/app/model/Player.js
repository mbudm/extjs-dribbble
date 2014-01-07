Ext.define('dgl.model.Player', {
    extend: 'Ext.data.Model',
    requires:['dgl.proxy.RestViaProxy'],
    fields: [ "id",
			  "name",
			  "username",
			  "url",
			  "avatar_url",
			  "location",
			  "twitter_screen_name",
			  "drafted_by_player_id",
			  "shots_count",
			  "draftees_count",
			  "followers_count",
			  "following_count",
			  "comments_count",
			  "comments_received_count",
			  "likes_count",
			  "likes_received_count",
			  "rebounds_count",
			  "rebounds_received_count",
			  "created_at"],
    proxy: {
        type: 'restproxy',
        url : 'http://api.dribbble.com/players/'
        /*,
        actionMethods: { // default GET
			create : undefined,
			read   : 'GET',
			update : undefined,
			destroy: undefined
		},
		reader: {
			type: 'json',
			root: '',
			idProperty: 'id'
		}*/
    }
});