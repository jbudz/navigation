npm install cordova -g
cordova create simple-navigator com.example.simplenavigator SimpleNavigator
cd simple-navigator
add <preference name="Orientation" value="portrait" /> to config.xml under widget
cordova platform add android
cordova plugin add org.apache.cordova.device-orientation
cordova plugin add org.apache.cordova.geolocation
git clone ..
cd simple-navigator
bower install
npm install
plugin in device or 'cordova emulate android'
grunt build
