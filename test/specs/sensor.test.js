
const SensorPage = require('../../pageObjects/sensors.page.js');
const expect = require('chai').expect;
const multiremote = require('webdriverio');


const app_package = "com.android.settings"
const app_package_activity_setting_home = "com.android.settings.Settings"
const app_package_activity_wifi = "com.android.settings.Settings$WifiSettings2Activity"
const app_package_activity_bluetooth = "com.android.settings.SubSettings"
const app_package_activity_4 = "com.android.settings.Settings$BluetoothSettingsActivity"
const app_package_activity_5 = "com.android.settings.Settings$AirplaneModeSettingsActivity"
const app_package_activity_6 = "com.android.settings.Settings$LocationSettingsActivity"


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


    // it('test_wifi', async () => {
        
    //     await delay(3000);

    //     await driver.startActivity(app_package,app_package_activity_wifi )
    //     await delay(3000);
 
    //     expect(await(await sensorPage.device_connected).isDisplayed()).equal(true);
    //     // let connected = await(await sensorPage.connected).getText();
    //     // expect(connected).equal('Connected');

    //     await driver.toggleWiFi();
    //     await delay(5000);

    //     expect(await(await sensorPage.device_disconnected).isDisplayed()).equal(true);
    //     // let disconnected = await(await sensorPage.disconnected).getText();
    //     // expect(disconnected).equal('Off');

    //     await driver.toggleWiFi();
    //     await delay(8000);
    //     expect(await(await sensorPage.device_connected).isDisplayed()).equal(true);
    //     // let again_connected = await(await sensorPage.connected).getText();
    //     // expect(again_connected).equal('Connected');

    // });

    // it('blutooh_on_off', async () => {
        


    //     await driver.startActivity(app_package,app_package_activity_setting_home )

    //     await(await sensorPage.connected_device).click()
    //     await delay(5000);

    //     await(await sensorPage.connected_preference).click()
    //     await delay(5000);

    //     await(await sensorPage.blue).click()
    //     await delay(5000);

    //     await(await sensorPage.blue_sw).click()
    //     await delay(5000);

    //     expect(await(await sensorPage.blue_Device).isDisplayed()).equal(true);



    // });


    //     it('orientation', async () => {
        
    //     await delay(3000);

    //     await driver.startActivity(app_package,app_package_activity_setting_home )
    //     // expect(await(await sensorPage.connected).isDisplayed()).equal(true);

    //     let orientation = await driver.getOrientation();
    //     expect(orientation).equal('PORTRAIT');

    //     await delay(5000);
    //     await driver.setOrientation("LANDSCAPE");

    //     let orientation_1 = await driver.getOrientation();
    //     expect(orientation_1).equal('LANDSCAPE');

    //     await delay(5000);
    //     await driver.setOrientation("PORTRAIT");

    //     let a_orientation = await driver.getOrientation();
    //     expect(a_orientation).equal('PORTRAIT');

    // });


    it('location', async () => {
        
        await driver.startActivity(app_package,app_package_activity_setting_home )

        expect(await(await sensorPage.location_off).isDisplayed()).equal(true);
        let l_off = await(await sensorPage.location_off).getText();
        expect(l_off).equal('Location is off');

        await driver.toggleLocationServices();
        await delay(20000);

        expect(await(await sensorPage.location_off).isDisplayed()).equal(true);
        let l_on = await(await sensorPage.location_off).getText();
        expect(l_on).not.equal('On');

        await driver.toggleLocationServices();
        await delay(2000);

        expect(await(await sensorPage.location_off).isDisplayed()).equal(true);
        let a_l_off = await(await sensorPage.location_off).getText();
        expect(l_off).equal('Location is off');
    });

    afterEach(() => {
        driver.closeApp();
    });

    // after(() => {
    //     driver.reset();
    // });
})



// adb shell service call bluetooth_manager 6
// To disable:

// adb shell service call bluetooth_manager 8






