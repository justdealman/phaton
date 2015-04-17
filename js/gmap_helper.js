//
// function to get the latitude and longitude
// and place them on the test fields
function setLatLngToClass() {
    if (document.getElementById('test_latitude'))
        document.getElementById('test_latitude').value = map.getCenter().lat();
    if (document.getElementById('test_longitude'))
        document.getElementById('test_longitude').value = map.getCenter().lng();
}
//
// function to get Centered Latitude and Longitude points
function getCenterLatLngText() {
    return '(' + map.getCenter().lat() + ', ' + map.getCenter().lng() + ')';
}
//
// function to call when the center of the map
// has changed. Center information will be
// collected and displayed on the document
// elements
function centerChanged() {
    centerChangedLast = new Date();
    currentReverseGeocodeResponse = reverseGeocode();
}
//
// Collects reverse center location
function reverseGeocode() {
    reverseGeocodedLast = new Date();
    geocoder.geocode({latLng: map.getCenter()}, reverseGeocodeResult);
}
//
// Displays collected reverse geocoded results
// and displays them on document elements
function reverseGeocodeResult(results, status) {
    currentReverseGeocodeResponse = results;
}
//
// geocodes the address inserted
function geocode(city_selector) {
    if(!city_selector) {
        city_selector = "city_id";
    }
    var address = document.getElementById(city_selector).value + ', ' + document.getElementById("User_address").value;
    if(document.getElementById("User_house_number")) {
        address += ',' + document.getElementById("User_house_number").value;
    }
    geocoder.geocode({'address': address, 'partialmatch': true}, geocodeResult);
    $('#User_map_lat').val(mpick.getPosition().lat());
    $('#User_map_lon').val(mpick.getPosition().lng());
}

function geocodeResult(results, status) {
    if (status == 'OK' && results.length > 0) {
        map.fitBounds(results[0].geometry.viewport);
    }
    addMarkerAtCenter(map.getCenter());
}
//
// adds marker to the center of the map
function addMarkerAtCenter(position) {
    if(!mpick) {
        return;
    }
    mpick.setPosition(position);
}
