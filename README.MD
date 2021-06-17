# Android sensor testing

## change Apk path irn wdio.conf.js
## all sensors must be off except wifi

## run 
    $ appium

## run all tests
    
    $ npx wdio run wdio.conf.js

    ## run single test

    $ npx wdio run ./wdio.conf.js --spec sensor.test.js
   