var ContactPage = function () {

    return {

    	//Basic Map
        initMap: function () {
			var map;
			$(document).ready(function(){
			  map = new GMaps({
				div: '#map',
				lat: 39.595863,
				lng: -104.846672
			  });

			  var marker = map.addMarker({
                  lat: 39.595863,
                  lng: -104.846672,
	            title: 'Little Rascals Daycare'
		       });
			});
        },

        //Panorama Map
        initPanorama: function () {
		    var panorama;
		    $(document).ready(function(){
		      panorama = GMaps.createPanorama({
		        el: '#panorama',
                  lat: 39.595863,
                  lng: -104.846672
		      });
		    });
		}

    };
}();
