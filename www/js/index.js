function cordovaBeep() {
    navigator.notification.beep(4);
}

// VIBRATION
// https://cordova.apache.org/docs/en/10.x/reference/cordova-plugin-vibration/index.html

// Installation:
// cordova plugin add cordova-plugin-vibration

$(document).on('vclick', '#btn-cordova-vibration', cordovaVibration);

function cordovaVibration() {
    navigator.vibrate(2000, 2000, 2000, 3500, 3500, 3500, 1500, 1500, 1500);
}