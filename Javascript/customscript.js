
var mapLink = "avenzamaps://www.dropbox.com/scl/fi/nhn9fu83lgt7pxceb0hem/GPAZ_TRV2001_03_1_Havasu_36x32_2017.pdf?rlkey=s4moalwl5yzi9qy4thv8zr6gl&st=oihjg0hy&dl=1"; // URL scheme to open map
var mapOnly = "https://www.dropbox.com/scl/fi/nhn9fu83lgt7pxceb0hem/GPAZ_TRV2001_03_1_Havasu_36x32_2017.pdf?rlkey=s4moalwl5yzi9qy4thv8zr6gl&st=oihjg0hy&dl=0"
var appStoreURL = "https://apps.apple.com/us/app/avenza-maps/id452870569"; // iOS App Store URL
var playStoreURL = "https://play.google.com/store/apps/details?id=com.Avenza&hl=en_US"; // Android Play Store URL

// Function to open a map direct download as a deep link or open a dropbox link to it if the cusrom url is not found
function openAvenza() {
  var timeout;
  // Try to open the Avenza Maps app
  window.location = mapLink;

  // Set a timeout to detect if the app is installed (if it doesn't open)
  timeout = setTimeout(function() {
    
    // Redirect if app is not found
    if (navigator.userAgent.match(/iPhone|iPad|iPod/)) {
      window.location = appStoreURL;
    } else if (navigator.userAgent.match(/Android/)) {
      window.location = playStoreURL;
    } else {
      window.location = mapOnly;
    }
  }, 2000); // Timeout after 2 seconds
}

// Function to toggle the dropdown menu from borger
function toggleMenu() {
const menu = document.querySelector('.menu');
menu.classList.toggle('show');
}

// Function inserts nav.html so navbar only has to be changed in one place
function insertNavBar() {
  $("#nav-placeholder").load("/nav.html"); /* make sure this is not a relative directory */
}

//when any window is loaded run this
$(window).on('load', insertNavBar());
