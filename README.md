# MomoBoiler (Cordova + Cerebral + Onsen UI + React/NervJS)

An experimental boilerplate for use to develop desktop and mobile apps using above tech. 

- Why Cordova? One code base multiple device including desktop
- Why Cerebral? State management with good abstractions. Personally it just makes sense...
- Why Onsen? Good performance
- Develop in React and drop in Nerv for better performance (currently not working with cerebral hooked in)

#### Getting started

```
git clone  https://github.com/andrewvmail/momoboiler 
cd momoboiler
npm install
mkdir www
cordova platform add browser
cordova build browser
cordova run browser -- --live-reload 
# OR
UI_LIB=nervjs  cordova run browser -- --live-reload 
# open http://localhost:3000/www/ for livereload

```  

#### iOS
```
cordova add platform ios
cordova build ios
open platforms/ios/momoboiler.xcworkspace # set provisioning profile, select your device and run
```

#### Android
```
cordova add platform android
cordova build android
cordova run android # make sure adb devices connected device or emulator
```

<img src="https://user-images.githubusercontent.com/2431354/37457542-8558336a-27ff-11e8-9ab4-3202a75df074.png" width="400">

