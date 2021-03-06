(function () {
    angular
        .module("PlacesApp")
        .factory("APIService", APIService);

    function APIService($http) {
        var api = {
            search: search,
            getPhotoByPhotoReference:getPhotoByPhotoReference,
            searchDetail:searchDetail
        };

        return api;

        function getKey() {
            return $http.get("/api/googlePlaces");
        }

        function search(keywords) {

            var key = 'AIzaSyABe0JiGEryUQQsl_MLJPtDt-9IaKz5WRQ';
            var url = "https://maps.googleapis.com/maps/api/place/textsearch/json?";
            console.log(url);

            return $http.get(url, {
                params: {
                    key: key,
                    query: (keywords) ? 'attractions+in+' + keywords : 'attractions+in+Boston'
                }
            });

            // return $http.get("/api/google/search/"+keywords);
        }

        function getPhotoByPhotoReference(photoReference) {
            var Photokey = "AIzaSyAjaKcWRwi4RTt67BLdh6uZ0dMGk5zdArg";
            // var photoURL = "https://maps.googleapis.com/maps/api/place/photo?photoreference=" + photoReference + "&key=" + Photokey;
            // var photoURL = "https://maps.googleapis.com/maps/api/place/photo?";
            // return $http.get(photoURL,{
            //     params: {
            //         photoreference: photoReference,
            //         key: Photokey
            //     }
            // });

            var photoURL = "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference="+photoReference+"&key="+Photokey;
            console.log("Getting Image: "+photoURL);

            // return $http.get(photoURL);
            return photoURL;
        }

        function searchDetail(placeId) {
            var key = "AIzaSyAjaKcWRwi4RTt67BLdh6uZ0dMGk5zdArg";
            var url = "https://maps.googleapis.com/maps/api/place/details/json?";

            return $http.get(url,{
                params:{
                    placeid: placeId,
                    key: key
                }
            })
        }
    }
})();