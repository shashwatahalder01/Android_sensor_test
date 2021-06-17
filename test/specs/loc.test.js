
const SensorPage = require('../../pageObjects/sensors.page.js');
const expect = require('chai').expect;
const multiremote = require('webdriverio');


const app_package = "com.android.settings"
const app_package_activity_setting_home = "com.android.settings.Settings"
const app_package_activity_wifi = "com.android.settings.Settings$WifiSettings2Activity"


describe('Android Sensor tests', () => {
    let sensorPage = SensorPage;
    const delay = ms => new Promise(res => setTimeout(res, ms));
    autoLaunch = false;

    // before(async () => {
    //     driver.reset();
    // });


    // beforeEach(() => {
    //     driver.launchApp();
    // });



    it('location', async () => {
        
        await driver.startActivity(app_package,app_package_activity_setting_home )
        await delay(3000);
        await driver.touchAction([
            {action: 'press', x: 100, y: 1900},
            {action: 'moveTo', x: 100, y: 1000},
            'release'
          ]);        
  
        await delay(10000);
        await(await sensorPage.location).click()
        await delay(20000);
        // expect(await(await sensorPage.location_off).isDisplayed()).equal(true);
        // let l_off = await(await sensorPage.location_off).getText();
        // expect(l_off).equal('Location is off');

        // await driver.toggleLocationServices();
        // await delay(20000);

        // expect(await(await sensorPage.location_off).isDisplayed()).equal(true);
        // let l_on = await(await sensorPage.location_off).getText();
        // expect(l_on).not.equal('On');

        // await driver.toggleLocationServices();
        // await delay(2000);

        // expect(await(await sensorPage.location_off).isDisplayed()).equal(true);
        // let a_l_off = await(await sensorPage.location_off).getText();
        // expect(l_off).equal('Location is off');
    });

    afterEach(() => {
        driver.closeApp();
    });

    // after(() => {
    //     driver.reset();
    // });
})








