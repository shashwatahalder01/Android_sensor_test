
const SensorPage = require('../../pageObjects/sensors.page.js');
const expect = require('chai').expect;
const multiremote = require('webdriverio');


const app_package = "com.android.settings"
const app_package_activity_1 = "com.android.settings.Settings"
const app_package_activity_2 = "com.android.settings.Settings$WifiSettingsActivity"
const app_package_activity_3 = "com.android.settings.Settings$SecSoundModeSettingsActivity"
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
        
        // await delay(3000);

        // await driver.startActivity(app_package,app_package_activity_2 )
        // expect(await(await sensorPage.connected).isDisplayed()).equal(true);
        // let connected = await(await sensorPage.connected).getText();
        // expect(connected).equal('Connected');

        // await driver.toggleWiFi();
        // await delay(5000);

        // expect(await(await sensorPage.disconnected).isDisplayed()).equal(true);
        // let disconnected = await(await sensorPage.disconnected).getText();
        // expect(disconnected).equal('Off');

        // await driver.toggleWiFi();
        // await delay(8000);
        // expect(await(await sensorPage.connected).isDisplayed()).equal(true);
        // let again_connected = await(await sensorPage.connected).getText();
        // expect(again_connected).equal('Connected');

    // });

    // it('blutooh_on_off', async () => {
        


        // await driver.startActivity(app_package,app_package_activity_1 )

        // await(await sensorPage.conns).click()
        // await delay(3000);

        // expect(await(await sensorPage.blue).isDisplayed()).equal(true);
        // let b_off = await(await sensorPage.blue).getText();
        // expect(b_off).equal('Off');

        // await(await sensorPage.blue).click()
        // await delay(2000);

        // expect(await(await sensorPage.blue).isDisplayed()).equal(true);
        // let b_on = await(await sensorPage.blue).getText();
        // expect(b_on).equal('On');

        // await(await sensorPage.blue).click()
        // await delay(2000);

        // await delay(2000);
        // expect(await(await sensorPage.blue).isDisplayed()).equal(true);
        // let a_b_off = await(await sensorPage.blue).getText();
        // expect(a_b_off).equal('Off');


    //     // await(await sensorPage.conns).click()

    //     // driver.startActivity(app_package,"com.android.settings.Settings$BluetoothSettingsActivity")

    //     // await delay(3000);
    //     // expect(await(await sensorPage.blutooth_off).isDisplayed()).equal(true);
    //     // let b_off = await(await sensorPage.blutooth_off).getText();
    //     // expect(b_off).equal('Off');

    //     // await(await sensorPage.blutooth_switch).click()

    //     // expect(await(await sensorPage.blutooth_on).isDisplayed()).equal(true);
    //     // let b_on = await(await sensorPage.blutooth_on).getText();
    //     // expect(b_on).equal('On');

    //     // await(await sensorPage.blutooth_switch).click()

    //     // await delay(5000);
    //     // expect(await(await sensorPage.blutooth_off).isDisplayed()).equal(true);
    //     // let a_b_off = await(await sensorPage.blutooth_off).getText();
    //     // expect(a_b_off).equal('Off');

    // });


    //     it('orientation', async () => {
        
    //     await delay(3000);

    //     await driver.startActivity(app_package,app_package_activity_1 )
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
        
        // await driver.startActivity(app_package,app_package_activity_6 )

        // expect(await(await sensorPage.Location_status_off).isDisplayed()).equal(true);
        // let l_off = await(await sensorPage.Location_status_off).getText();
        // expect(l_off).equal('Off');

        await driver.toggleLocationServices();
        await delay(2000);

        // expect(await(await sensorPage.Location_status_on).isDisplayed()).equal(true);
        // let l_on = await(await sensorPage.Location_status_on).getText();
        // expect(l_on).equal('On');

        await driver.toggleLocationServices();
        await delay(2000);

        // expect(await(await sensorPage.Location_status_off).isDisplayed()).equal(true);
        // let a_l_off = await(await sensorPage.Location_status_off).getText();
        // expect(a_l_off).equal('Off');



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






