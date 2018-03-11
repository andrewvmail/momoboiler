# MomoBoiler (Cordova + Cerebral + Onsen UI + React/NervJS (bindings todo))

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
cordova add platform browser
cordova build browser
cordova run browser -- --live-reload # open http://localhost:3000/www/ for livereload
```  