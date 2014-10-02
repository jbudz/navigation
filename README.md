Simple Navigator
======
Navigation by coordinates.  Works without data/wireless if you can get a GPS lock.

Install
------
```bash
npm install cordova -g
cordova create simple-navigator com.example.simplenavigator SimpleNavigator
cd simple-navigator
cordova platform add android
cordova plugin add org.apache.cordova.device-orientation
cordova plugin add org.apache.cordova.geolocation
git clone git@github.com/jbudz/navigation.git
mv navigation pre-build && cd pre-build
bower install
npm install
grunt build
```

Other
------
* Add ```<preference name="Orientation" value="portrait" />``` to config.xml
