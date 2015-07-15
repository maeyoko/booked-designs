var userLatitude = 0; //current latitude of user
var userLongitude = 0; //current longitude of user
var currentMapNo = 0; //the map that is currently displayed
var newMapNo; //the map needing to be loaded

var API_KEY = 'AIzaSyBcrXTgUVxfXVLj3rh5gIUWyYRpveHMmEs';
var destinationLatitudes = [55.94444169174422, 55.94854169184422, 55.94644169174422, 55.94244169174422, 55.94144169174422, 55.94404169174422];
var destinationLongitudes = [-3.1870651245117188, -3.1870651245117388, -3.1810651245117188, -3.1890651245117388, -3.1872651245117388, -3.1870951245117388];
var noOfLocations = destinationLatitudes.length;

var swiper;

// functions to do with getting user location

$(document).ready(function() {

    <!-- Initialize Swiper -->
    var appendNumber = 1;
    var prependNumber = 1;
    swiper = new Swiper('.swiper-container', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 1,
        centeredSlides: false,
        spaceBetween: 30,
    });

//appending slides

    $('.swiper-button-next').click(function(e){
        e.preventDefault();
        console.log(appendNumber);
        if (++appendNumber < noOfLocations) {
            swiper.appendSlide('<div class="swiper-slide"> ' + "<iframe id='innerContent' class='currentMap map-top' width='100%' height='100%' src=" + "https://www.google.com/maps/embed/v1/directions?key=" + API_KEY + "&origin=" + userLatitude + ',' + userLongitude + "&destination=" + destinationLatitudes[appendNumber] + ',' + destinationLongitudes[appendNumber] + "&mode=walking" + "></iframe>" + '</div>');
        }
        sizeMap();
    });

    getLocation();
    $(window).resize(sizeMap);
});

function getLocation() {
    //check that the browser is compatible
    if (navigator.geolocation) {
        console.log("LDKJFLDJFLD");
        //get the user's current coordinates or throw an error if that's not possible
        navigator.geolocation.getCurrentPosition(saveInitialPosition, showError); //function inputs
    } else {
        alert('You browser does not support geolocation');
    }
}

function sizeMap()
{
    $("iframe").height($("iframe").width());
}

//save the current positions, then get a new suggestion from the server
function saveInitialPosition(position) {
    userLatitude = position.coords.latitude;
    userLongitude = position.coords.longitude;

    swiper.appendSlide('<div class="swiper-slide"> ' + "<iframe id='innerContent' class='currentMap map-top' width='100%' height='100%' src=" +
    "https://www.google.com/maps/embed/v1/directions?key=" + API_KEY + "&origin=" + userLatitude + ',' + userLongitude + "&destination=" +
     destinationLatitudes[0] + ',' + destinationLongitudes[0] + "&mode=walking" + "></iframe>" + '</div>');

    swiper.appendSlide('<div class="swiper-slide"> ' + "<iframe id='innerContent' class='currentMap map-top' width='100%' height='100%' src=" +
     "https://www.google.com/maps/embed/v1/directions?key=" + API_KEY + "&origin=" + userLatitude + ',' + userLongitude + "&destination=" +
      destinationLatitudes[1] + ',' + destinationLongitudes[1] + "&mode=walking" + "></iframe>" + '</div>');

      sizeMap();
}

//if impossible to get user's current coordinates, display a relevant error message
function showError(error) {
    switch (error.code) {
    case error.PERMISSION_DENIED:
        alert("Geolocation required for this app.")
        break;
    case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
    case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
    case error.UNKNOWN_ERROR:
        alert("An unknown error occurred when attempting to find your location.");
        break;
    }
}