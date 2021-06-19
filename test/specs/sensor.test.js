
const SensorPage = require('../../pageObjects/sensors.page.js');
const expect = require('chai').expect;
const multiremote = require('webdriverio');


const app_package = "com.android.settings"
const app_package_activity_setting_home = "com.android.settings.Settings"
const app_package_activity_wifi = "com.android.settings.Settings$WifiSettings2Activity"
const app_package_activity_location = "com.android.settings.Settings$LocationSettingsActivity"


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


    it('wifi', async () => {
        
        await delay(3000);

        await driver.startActivity(app_package,app_package_activity_wifi )
        await delay(3000);
 
        expect(await(await sensorPage.device_connected).isDisplayed()).equal(true);

        await driver.toggleWiFi();
        await delay(5000);

        expect(await(await sensorPage.device_disconnected).isDisplayed()).equal(true);

        await driver.toggleWiFi();
        await delay(8000);
        expect(await(await sensorPage.device_connected).isDisplayed()).equal(true);
  

    });

    it('blutooh', async () => {
        


        await driver.startActivity(app_package,app_package_activity_setting_home )

        await(await sensorPage.connected_device).click()
        await delay(3000);

        await(await sensorPage.connected_preference).click()
        await delay(3000);

        await(await sensorPage.blue).click()
        await delay(3000);

        await(await sensorPage.blue_sw).click()
        await delay(5000);

        expect(await(await sensorPage.blue_Device).isDisplayed()).equal(true);
        await delay(3000);

        await(await sensorPage.blue_sw).click()
        await delay(3000);



    });


        it('orientation', async () => {
        
        await delay(2000);

        await driver.startActivity(app_package,app_package_activity_setting_home )
        // expect(await(await sensorPage.connected).isDisplayed()).equal(true);

        let orientation = await driver.getOrientation();
        expect(orientation).equal('PORTRAIT');

        await delay(2000);
        await driver.setOrientation("LANDSCAPE");

        let orientation_1 = await driver.getOrientation();
        expect(orientation_1).equal('LANDSCAPE');

        await delay(2000);
        await driver.setOrientation("PORTRAIT");

        let a_orientation = await driver.getOrientation();
        expect(a_orientation).equal('PORTRAIT');

    });

    // it('airplane mode', async () => {
        
    //     await delay(2000);
    //     await driver.openNotifications();
    //     await delay(2000);
    //     await driver.toggleAirplaneMode();      
    //     await delay(3000);
    //     let status_airplane_on = await (await sensorPage.Airplane_).getText()
    //     expect(status_airplane_on).equal('On')
    //     console.log('turnedon airplane mode')

    //     await driver.toggleAirplaneMode();
    //     await delay(3000);
    //     let status_airplane_off = await (await sensorPage.Airplane_).getText()
    //     expect(status_airplane_off).equal('Off')
    //     console.log('turnedoff airplane mode')

    // });

    it(' data', async () => {
           
        // await delay(2000);
        await driver.openNotifications();
        await delay(3000);
        await driver.toggleData();  
        await delay(3000);
        let status_Mdata_on = await (await sensorPage.Mdata_).getText()
        expect(status_Mdata_on).equal('On')
        console.log('turnedon data ')
        await delay(3000);

        await driver.toggleData();
        await delay(3000);
        let status_Mdata_off = await (await sensorPage.Mdata_).getText()
        expect(status_Mdata_off).equal('Off')
        console.log('turnedoff data ')
        await driver.back()
        
    });

    it(' location', async () => {

        // await delay(2000);
        await driver.openNotifications();
        await delay(2000);
        // await driver.toggleLocationServices();
        await (await sensorPage.location_).click()
        await delay(3000); 
        let status_location_on = await (await sensorPage.location_).getText()
        expect(status_location_on).equal('On')
        console.log('turnedon data ')
        await delay(3000);

        // await driver.toggleLocationServices();
        await (await sensorPage.location_).click()
        await delay(3000);
        let status_location_off = await (await sensorPage.location_).getText()
        expect(status_location_off).equal('Off')
        console.log('turnedoff data ')
        await driver.back()
        

    });

    


    afterEach(() => {
        driver.closeApp();
    });

    // after(() => {
    //     driver.reset();
    // });
})








