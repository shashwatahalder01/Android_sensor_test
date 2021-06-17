# Android sensor testing

## change Apk path irn wdio.conf.js

## run 
    $ appium

## run all tests
    
    $ npx wdio run wdio.conf.js

    ## run single test

    $ npx wdio run ./wdio.conf.js --spec wifi.test.js
    $ npx wdio run ./wdio.conf.js --spec sensor.test.js
    $ npx wdio run ./wdio.conf.js --spec loc.test.js