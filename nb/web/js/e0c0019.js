var map=null;var currentLocation=null;var UsersLoader={usersLayers:new Array(),removeUsers:function(){for(var a=0;a<UsersLoader.usersLayers.length;++a){map.removeLayer(UsersLoader.usersLayers[a])}UsersLoader.usersLayers=[]},requestUsers:function(){if(map.getZoom()>=13){var a=map.getBounds();var b=[{lat:a.getSouthWest().lat,lng:a.getSouthWest().lng},{lat:a.getNorthWest().lat,lng:a.getNorthWest().lng},{lat:a.getNorthEast().lat,lng:a.getNorthEast().lng},{lat:a.getSouthEast().lat,lng:a.getSouthEast().lng}];$.get(Routing.generate("ctf_statistics_nearby_users_pub",{bounds:JSON.stringify(b)}),null,function(c){UsersLoader.onUsersLoaded(JSON.parse(c))})}else{UsersLoader.removeUsers()}},onUsersLoaded:function(d){if("success"==d.status){UsersLoader.removeUsers();var a=d.users,b;for(b=0;b<a.length;++b){var c=new L.marker(a[b].location,{title:a[b].username});c.bindPopup('<div class="row-fluid"><div class="span12"><h2 style="color:#000;">'+a[b].fname+" "+a[b].lname+'</h2></div></div><div class="row-fluid"><div class="span4"><img src="'+a[b].dp+'" title="'+a[b].username+'\'s Profile Picture" class="img-polaroid" width="50"></div><div style="color:#000;" class="span8"><a href="'+Routing.generate("ctf_public_profile",{id:a[b].id})+'" target="_blank">@'+a[b].username+"</a></div></div>");map.addLayer(c);UsersLoader.usersLayers.push(c)}}}};